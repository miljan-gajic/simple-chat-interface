import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAMessage } from "features/messagingInterface";
import { useState } from "react";
import { useAuthor } from "store/authorContext";
import type { MessagePayload } from "utils/types";
import classes from "./AppBar.module.css";

const AppBar: React.FC = () => {
  const [message, setMessage] = useState("");
  const queryClient = useQueryClient();

  const {
    state: { author },
  } = useAuthor();

  console.log(author);

  const { mutate, isLoading: isLoadingMutation } = useMutation({
    mutationFn: ({ author, message }: MessagePayload) =>
      addAMessage({ author, message }),
    onSuccess: () => queryClient.invalidateQueries(["messages"]),
  });

  const addNewMessageHandler = () => {
    mutate({
      author: author as string,
      message,
    });
    setMessage("");
  };

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
          className={classes.sendButton}
          disabled={isLoadingMutation}
          onClick={addNewMessageHandler}
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default AppBar;
