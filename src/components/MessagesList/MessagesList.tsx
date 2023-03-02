import { useQuery } from "@tanstack/react-query";
import Message from "components/Message/Message";
import { getAllMessages } from "features/messagingInterface";
import { useMemo } from "react";
import { useAuthor } from "store/authorContext";
import type { Message as MessageType } from "utils/types";
import classes from "./MessageList.module.css";

const MessagesList: React.FC = () => {
  const { dispatch } = useAuthor();

  const {
    data: listOfMessages,
    error,
    isLoading,
    isSuccess,
  } = useQuery<MessageType[]>({
    queryKey: ["messages"],
    queryFn: getAllMessages,
  });

  const sortedMessagesByTime = useMemo(() => {
    return listOfMessages?.sort((a, b) => {
      return new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf();
    });
  }, [listOfMessages]);

  return (
    <div className={classes.messagesContainer}>
      {sortedMessagesByTime?.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </div>
  );
};

export default MessagesList;
