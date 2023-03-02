import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Message from "components/Message/Message";
import { addAMessage, getAllMessages } from "features/messagingInterface";
import { useAuthor } from "store/authorContext";
import type { Message as MessageType, MessagePayload } from "utils/types";

const MessagesList: React.FC = () => {
  const queryClient = useQueryClient();
  const { dispatch } = useAuthor();

  const { data, error, isLoading, isSuccess } = useQuery<MessageType[]>({
    queryKey: ["messages"],
    queryFn: getAllMessages,
  });

  const { mutate, isLoading: isLoadingMutation } = useMutation({
    mutationFn: ({ author, message }: MessagePayload) =>
      addAMessage({ author, message }),
    onSuccess: () => queryClient.invalidateQueries(["messages"]),
  });

  const addNewMessageHandler = () => {
    mutate({
      author: "Miljan Gajic",
      message: "This is first message from the client",
    });
  };

  return (
    <div>
      {data?.map((message) => (
        <Message key={message._id} message={message} />
      ))}

      <button disabled={isLoadingMutation} onClick={addNewMessageHandler}>
        Add Message
      </button>
      <button onClick={() => dispatch({ type: "addUser", payload: "Goran" })}>
        Add author
      </button>
    </div>
  );
};

export default MessagesList;
