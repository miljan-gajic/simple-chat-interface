import { useAuthor } from "store/authorContext";
import classes from "./ChangeUserPopUp.module.css";

type Props = {
  toggleAuthorModal: () => void;
};

const ChangeUserPopUp: React.FC<Props> = ({ toggleAuthorModal }) => {
  // Combination of code to dispatch the author to the context store
  const {
    dispatch,
    state: { author },
  } = useAuthor();

  const removeAndChangeUserHandler = () => {
    dispatch({
      type: "addAuthor",
      payload: "",
    });
    toggleAuthorModal();
  };
  return (
    <div className={classes.changeUserWrapper}>
      <p className={classes.authorName}>{author}</p>
      <button
        className={classes.changeUserBtn}
        onClick={removeAndChangeUserHandler}
      >
        Change User
      </button>
    </div>
  );
};

export default ChangeUserPopUp;
