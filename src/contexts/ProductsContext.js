import React from "react";

export const ProductsContext = React.createContext();
const initial_state = {
  products: [],
  filters: [],
};
export const ProdutosContext = ({ children }) => {
  const [produtos, setProdutos] = React.useState(initial_state);
  return (
    <ProductsContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ProductsContext.Provider>
  );
};
