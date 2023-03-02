import { useState } from "react";
import { useAuthor } from "store/authorContext";
import classes from "./ModalContent.module.css";

type Props = {
  toggleModal: () => void;
};

const ModalContent: React.FC<Props> = ({ toggleModal }) => {
  const [author, setAuthor] = useState("");
  const { dispatch } = useAuthor();

  const setAuthorHandler = () => {
    dispatch({
      type: "addAuthor",
      payload: author,
    });
    toggleModal();
  };

  return (
    <div className={classes.modalContentContainer}>
      <label htmlFor="author">
        How should we call you?
        <input
          type="text"
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <button className={classes.addAuthorBtn} onClick={setAuthorHandler}>
        Set the name
      </button>
    </div>
  );
};

export default ModalContent;
