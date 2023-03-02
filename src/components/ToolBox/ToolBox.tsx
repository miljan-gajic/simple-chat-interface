import { Clock, Repeat } from "react-feather";
import { SORTING_MESSAGES } from "utils/constants";
import classes from "./ToolBox.module.css";

type Props = {
  direction: string;
  sortingHandler: (dir: string) => void;
};

const ToolBox: React.FC<Props> = ({ sortingHandler, direction }) => {
  const sortMessages = () => {
    return direction === SORTING_MESSAGES.ASC
      ? sortingHandler(SORTING_MESSAGES.DESC)
      : sortingHandler(SORTING_MESSAGES.ASC);
  };
  return (
    <div className={classes.toolBoxWrapper} onClick={sortMessages}>
      <div title="Sort in reverse order" className={classes.buttonIcon}>
        <Repeat color="#999" size={28} />
      </div>
      <div title="Show from time..." className={classes.buttonIcon}>
        <Clock color="#999" size={28} />
      </div>
    </div>
  );
};

export default ToolBox;
