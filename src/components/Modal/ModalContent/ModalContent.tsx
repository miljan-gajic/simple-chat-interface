import { useState } from "react";
import classes from "./ModalContent.module.css";

const ModalContent: React.FC = () => {
  const [author, setAuthor] = useState("");

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
    </div>
  );
};

export default ModalContent;
