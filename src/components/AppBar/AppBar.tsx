import { useState } from "react";
import classes from "./AppBar.module.css";

const AppBar: React.FC = () => {
  const [message, setMessage] = useState("");
  return (
    <section className={classes.appBarContainer}>
      <div className={classes.appBarContentContainer}>
        <input
          type="text"
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={() => console.log({ message })}
          className={classes.sendButton}
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default AppBar;
