import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { MessageProvider } from "./contexts/MessageContext";
import Message from "./components/message/Message";
import React from "react";

import Products from "./components/products/products";
function App() {
  return (
    <div className="App">
      <MessageProvider>
        <Message />
        <Header></Header>
        <Products />
        <Footer></Footer>
      </MessageProvider>
    </div>
  );
}

export default App;
