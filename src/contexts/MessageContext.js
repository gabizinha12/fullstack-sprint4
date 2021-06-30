import { createContext, useState } from "react";
import React from "react";

export const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [hasError, setHasError] = useState(false);

  return (
    <MessageContext.Provider value={{ hasError, setHasError }}>
      {children}
    </MessageContext.Provider>
  );
}
