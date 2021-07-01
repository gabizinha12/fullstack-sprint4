import React from "react";

export const CategoriasContext = React.createContext();

const INITAL_STATE = {
  all: [],
  current: [],
};

export const CatgoriasContext = ({ children }) => {
  const [categorias, setCategorias] = React.useState(INITAL_STATE);

  return (
    <CategoriasContext.Provider value={{ categorias, setCategorias }}>
      {children}
    </CategoriasContext.Provider>
  );
};
