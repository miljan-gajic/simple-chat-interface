import { useQuery } from "@tanstack/react-query";
import Message from "components/Message/Message";
import Modal from "components/Modal/Modal";
import ToolBox from "components/ToolBox/ToolBox";
import { getAllMessages } from "features/messagingInterface";
import useModal from "hooks/modal";
import { useMemo, useState } from "react";
import { SORTING_MESSAGES } from "utils/constants";
import type { Message as MessageType } from "utils/types";
import classes from "./MessageList.module.css";

type Props = {
  toggleAuthorModal: () => void;
};

const MessagesList: React.FC<Props> = ({ toggleAuthorModal }) => {
  const [sortingOrder, setSortingOrder] = useState(SORTING_MESSAGES.ASC);

  const { data: listOfMessages, error } = useQuery<MessageType[]>({
    queryKey: ["messages"],
    queryFn: getAllMessages,
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
