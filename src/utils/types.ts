// There are some techniques to abstract the types from returned data from fetch API
// But, again, due to the app being just a hand-full of components and there is only one feature
// There was no need to go nuts with types and TS in general

export type Message = {
  _id: string;
  message: string;
  author: string;
  timestamp: number;
  // removing token from the type since it has nothing to do with UI
  // And generally this where you introduce DTOs to not send data that you dont need on FE
};

export type MessagePayload = Pick<Message, "author" | "message">;
