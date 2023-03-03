import { createContext, useContext, useMemo, useReducer } from "react";

// I have added a context here mostly to add another "data" layer to the app
// Just to showcase that you don't need to render prop pass children and prop drill
// To send data down the components chain. But there was no real need for context or redux, zustand, mobx, x-state etc...

type Action =
  | { type: "addAuthor"; payload: string }
  | { type: "addTimeStamp"; payload: number };
type Dispatch = (action: Action) => void;
type State = { author: string; timestamp: number };
type CountProviderProps = { children: React.ReactNode };

export const AuthorStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

export const authorReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "addAuthor": {
      return {
        ...state,
        author: action.payload,
      };
    }
    case "addTimeStamp": {
      return {
        ...state,
        timestamp: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

function AuthorProvider({ children }: CountProviderProps) {
  // @ts-ignore
  const [state, dispatch] = useReducer(authorReducer, {});
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
