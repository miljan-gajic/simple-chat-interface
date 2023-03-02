import { format } from "date-fns";
import { useAuthor } from "store/authorContext";
import type { Message as MessageType } from "utils/types";
import classes from "./Message.module.css";

type Props = {
  message: MessageType;
};

const Message: React.FC<Props> = ({ message }) => {
  const {
    state: { author },
  } = useAuthor();

  return author ? (
    <div className={classes.messageBox}>
      <p className={classes.secondaryText}>{message.author}</p>
      <p className={classes.messageText}>{message.message}</p>
      <p className={classes.secondaryText}>
        {format(message.timestamp, "dd MMMM yyyy' 'HH:mm")}
      </p>
    </div>
  ) : null;
};

export default Message;
