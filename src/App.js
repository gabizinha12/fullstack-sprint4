import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Message from "./components/message/Message";
import Products from "./components/products/products";

import { MessageContext } from "./contexts/MessageContext";
import { CategoriasContext } from "./contexts/CategoriasContext";

function App() {
  return (
    <>
      <MessageContext>
        <Message />

        <CategoriasContext>
          <Header />
        </CategoriasContext>
        <Products />
      </MessageContext>

      <Footer></Footer>
    </>
  );
}

export default App;
