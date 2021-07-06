import React, { createContext, useState } from "react";
export const LoadingContext = createContext();
const INITIAL_STATE = {
  show: false,
};
export const LoadContext = ({ children }) => {
  const [loading, setLoading] = useState(INITIAL_STATE);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
