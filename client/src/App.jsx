import ChatBody from "./components/ChatBody";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="min-h-screen bg-zinc-800 text-white">
        <Nav />
        <ChatBody />
      </div>
    </>
  );
}

export default App;
