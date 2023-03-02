export type Message = {
  _id: string;
  message: string;
  author: string;
  timestamp: number;
  // removing token from the type since it has nothing to do with UI
};

export type MessagePayload = Pick<Message, "author" | "message">;
