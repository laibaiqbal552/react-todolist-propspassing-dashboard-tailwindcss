import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  users: [
    {
      id: 1,
      name: "userone",
    },
    {
      id: 2,
      name: "user 2",
    },
    {
      id: 3,
      name: "user 3",
    },
    {
      id: 4,
      name: "user 4",
    },
  ],
};

export const GlobalContext = createContext(initialState);
//provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ user: state.users }}>
      {children}
    </GlobalContext.Provider>
  );
};
