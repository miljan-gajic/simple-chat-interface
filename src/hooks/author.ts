import { useAuthor } from "store/authorContext";
import type { Message as MessageType } from "utils/types";

export const useSetAuthorAndMessages = (messages: MessageType[]) => {
  const { dispatch } = useAuthor();
};
