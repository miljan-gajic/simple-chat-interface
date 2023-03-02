import type { Message as MessageType } from "utils/types";

type Props = {
  message: MessageType;
};

const Message: React.FC<Props> = ({ message }) => {
  return (
    <div>
      <p>{message.author}</p>
      <p>{message.message}</p>
    </div>
  );
};

export default Message;
