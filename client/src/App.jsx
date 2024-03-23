import { createContext, useState } from "react";
import ChatBody from "./components/ChatBody";
import Nav from "./components/Nav";
import ChatInput from "./components/ChatInput";

export const ChatContext = createContext({});
function App() {
  const [chat, setChat] = useState([]);
  return (
    <>
      <ChatContext.Provider value={(chat, setChat)}>
        <div className="min-h-screen bg-zinc-800 text-white">
          <Nav />
          <ChatBody />
          <ChatInput />
        </div>
      </ChatContext.Provider>
    </>
  );
}

export default App;
