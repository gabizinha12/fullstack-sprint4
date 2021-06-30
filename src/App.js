import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { MessageProvider } from "./contexts/MessageContext";
import Message from "./components/message/Message";
function App() {
  return (
    <div className="App">
      <MessageProvider>
        <Message />
        <Header></Header>
        <Footer></Footer>
      </MessageProvider>
    </div>
  );
}

export default App;
