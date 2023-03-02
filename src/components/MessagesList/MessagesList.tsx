import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Message from "components/Message/Message";
import { addAMessage, getAllMessages } from "features/messagingInterface";
import { useMemo } from "react";
import { useAuthor } from "store/authorContext";
import type { Message as MessageType, MessagePayload } from "utils/types";
import classes from "./MessageList.module.css";

const MessagesList: React.FC = () => {
  const queryClient = useQueryClient();
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

  const { mutate, isLoading: isLoadingMutation } = useMutation({
    mutationFn: ({ author, message }: MessagePayload) =>
      addAMessage({ author, message }),
    onSuccess: () => queryClient.invalidateQueries(["messages"]),
  });

  const sortedMessagesByTime = useMemo(() => {
    return listOfMessages?.sort((a, b) => {
      return new Date(b.timestamp).valueOf() - new Date(a.timestamp).valueOf();
    });
  }, [listOfMessages]);

  const addNewMessageHandler = () => {
    mutate({
      author: "Miljan Gajic",
      message: "This is first message from the client",
    });
  };

  return (
    <div className={classes.messagesContainer}>
      {sortedMessagesByTime?.map((message) => (
        <Message key={message._id} message={message} />
      ))}

      <button disabled={isLoadingMutation} onClick={addNewMessageHandler}>
        Add Message
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "addMessages",
            payload: {
              author: "Goran",
              message: "Some different rand message",
            },
          })
        }
      >
        Add author and message
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "addAuthor",
            payload: "Zoran",
          })
        }
      >
        Add only author
      </button>
    </div>
  );
};

export default MessagesList;
