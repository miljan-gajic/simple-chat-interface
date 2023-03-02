import ChangeUserPopUp from "components/ChangeUserPopUp/ChangeUserPopUp";
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
  const [showUserPopUp, setShowUserPopUp] = useState(false);

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
      <div title="Show from time..." className={classes.buttonIcon}>
        <Clock color="#999" size={28} />
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
