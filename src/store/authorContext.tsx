import { createContext, useContext, useMemo, useReducer } from "react";
import type { Message as MessageType, MessagePayload } from "utils/types";

type Action =
  | { type: "addUser"; payload: string }
  | { type: "addMessages"; payload: MessagePayload[] };
type Dispatch = (action: Action) => void;
type State = { author: string; messages: MessageType[] };
type CountProviderProps = { children: React.ReactNode };

export const AuthorStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

export const authorReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "addUser": {
      return {
        ...state,
        author: action.payload,
      };
    }
    case "addMessages": {
      return {
        ...state,
        messages: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

function AuthorProvider({ children }: CountProviderProps) {
  // @ts-ignore
  const [state, dispatch] = useReducer(authorReducer, {
    author: "",
    messages: [],
  });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <AuthorStateContext.Provider value={value}>
      {children}
    </AuthorStateContext.Provider>
  );
}

function useAuthor() {
  const context = useContext(AuthorStateContext);
  if (context === undefined) {
    throw new Error("useAuthor must be used within a AuthorProvider");
  }
  return context;
}

export { AuthorProvider, useAuthor };
