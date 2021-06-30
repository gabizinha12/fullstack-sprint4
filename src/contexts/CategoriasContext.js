import React from "react";

export const CategoriaContext = React.createContext();

const INITAL_STATE = {
  all: [],
  current: [],
};

export const CategoriasContext = ({ children }) => {
  const [categorias, setCategorias] = React.useState(INITAL_STATE);
  return (
    <CategoriasContext.Provider value={{ categorias, setCategorias }}>
      {children}
    </CategoriasContext.Provider>
  );
};
