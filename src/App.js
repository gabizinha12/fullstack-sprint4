import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { MessageProvider } from "./contexts/MessageContext";
import { CatgoriasContext } from "./contexts/CategoriasContext";
import { ProdutosContext } from "./contexts/ProductsContext";
import Message from "./components/message/Message";
import Products from "./components/products/products";
function App() {
  return (
    <div className="App">
      <ProdutosContext>
        <CatgoriasContext>
          <MessageProvider>
            <Message />
            <Header></Header>
            <Products></Products>
            <Footer></Footer>
          </MessageProvider>
        </CatgoriasContext>
      </ProdutosContext>
    </div>
  );
}

export default App;
