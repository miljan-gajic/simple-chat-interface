import { createContext, useContext, useMemo, useReducer } from "react";

type Action = { type: "addAuthor"; payload: string };
type Dispatch = (action: Action) => void;
type State = { author: string };
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
