import ChangeUserPopUp from "components/ChangeUserPopUp/ChangeUserPopUp";
import TimePicker from "components/TimePicker/TimePicker";
import { useState } from "react";
import { Clock, Repeat, User } from "react-feather";
import { useAuthor } from "store/authorContext";
import { SORTING_MESSAGES } from "utils/constants";
import classes from "./ToolBox.module.css";

type Props = {
  direction: string;
  sortingHandler: (dir: string) => void;
  toggleAuthorModal: () => void;
};

const ToolBox: React.FC<Props> = ({
  sortingHandler,
  direction,
  toggleAuthorModal,
}) => {
  // More than two pieces of state and we could introduce the useReducer to store the state
  // which is more easier way of updating large number of pieces of state
  const [showUserPopUp, setShowUserPopUp] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const {
    state: { author },
  } = useAuthor();

  const sortMessages = () => {
    return direction === SORTING_MESSAGES.ASC
      ? sortingHandler(SORTING_MESSAGES.DESC)
      : sortingHandler(SORTING_MESSAGES.ASC);
  };
  return author ? (
    <div className={classes.toolBoxWrapper}>
      <div
        title="Sort in reverse order"
        className={classes.buttonIcon}
        onClick={sortMessages}
      >
        <Repeat color="#999" size={28} />
      </div>
      <div
        title="Show from time..."
        className={`${classes.buttonIcon} ${classes.changeUserPopUp}`}
        onClick={() => setShowTimePicker(!showTimePicker)}
      >
        <Clock color="#999" size={28} />
        {showTimePicker && <TimePicker />}
      </div>
      <div
        title="Change user"
        className={`${classes.buttonIcon} ${classes.changeUserPopUp}`}
        onClick={() => setShowUserPopUp(!showUserPopUp)}
      >
        <User color="#999" size={28} />
        {showUserPopUp && (
          <ChangeUserPopUp toggleAuthorModal={toggleAuthorModal} />
        )}
      </div>
    </div>
  ) : null;
};

export default ToolBox;
