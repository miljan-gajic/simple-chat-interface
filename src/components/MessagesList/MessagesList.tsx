import { useQuery } from "@tanstack/react-query";
import Message from "components/Message/Message";
import Modal from "components/Modal/Modal";
import ToolBox from "components/ToolBox/ToolBox";
import {
  getAllMessages,
  getMessagesFromTimestamp,
} from "features/messagingInterface/api";
import useModal from "hooks/modal";
import { useMemo, useState } from "react";
import { useAuthor } from "store/authorContext";
import { SORTING_MESSAGES } from "utils/constants";
import type { Message as MessageType } from "utils/types";
import classes from "./MessageList.module.css";

type Props = {
  toggleAuthorModal: () => void;
};

const MessagesList: React.FC<Props> = ({ toggleAuthorModal }) => {
  const [sortingOrder, setSortingOrder] = useState(SORTING_MESSAGES.ASC);

  const {
    state: { timestamp },
  } = useAuthor();

  // Doing the query based on the timestamp saved in the context store
  // This is not the best approach but it is good for this kind of approach where we use
  // react=query as a client caching data fetching library
  const { data: listOfMessages, error } = useQuery<MessageType[]>({
    queryKey: ["messages", timestamp],
    queryFn: timestamp
      ? () => getMessagesFromTimestamp(timestamp)
      : getAllMessages,
  });

  const { isOpen, toggle } = useModal(Boolean(error));

  // Showing the messages in reverse chronological order as stated in instructions
  // And adding functionality to reverse this order
  const sortedMessagesByTime = useMemo(() => {
    return listOfMessages?.sort((a, b) => {
      return sortingOrder === SORTING_MESSAGES.ASC
        ? new Date(b.timestamp).valueOf() - new Date(a.timestamp).valueOf()
        : new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf();
    });
  }, [listOfMessages, sortingOrder]);

  // Show the user modal to inform them that there has been an error
  // Even though there is no centralized Error handling implemented - mainly because this is really just a simple app
  // Some feedback is always good to have and leveraging the react-query error is convenient
  if (error) {
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className={classes.errorBox}>
          <p className={classes.errorParagraph}>
            The Error ocurred please try later
          </p>
        </div>
      </Modal>
    );
  }

  return (
    <div className={classes.messagesContainer}>
      <ToolBox
        sortingHandler={(dir: string) => setSortingOrder(dir)}
        direction={sortingOrder}
        toggleAuthorModal={toggleAuthorModal}
      />
      {sortedMessagesByTime?.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  );
};

export default MessagesList;
