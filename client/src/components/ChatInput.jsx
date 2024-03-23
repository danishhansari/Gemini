import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { ChatContext } from "../App";

export const getResponse = async (message) => {
  try {
    const {
      data: { response },
    } = await axios.post(`${import.meta.env.VITE_SERVER_LOCATION}/gemini`, {
      message: message,
    });
    return response;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
const ChatInput = () => {
  const inputRef = useRef();
  const [inputVal, setInputVal] = useState("");
  const { chat, setChat } = useContext(ChatContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInput = async () => {
    const userObj = {
      author: "user",
      message: inputVal,
    };
    setInputVal("");
    setChat((chat) => [...chat, userObj]);

    const response = await getResponse(inputVal);
    const aiObj = {
      author: "gemini",
      message: response,
    };
    setChat((chat) => [...chat, aiObj]);
  };

  return (
    <div className="fixed bottom-2 w-full flex items-center justify-center">
      <div className="w-full max-w-[750px] px-4 py-2">
        <div className="relative inline-block w-full">
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            ref={inputRef}
            type="text"
            className="w-full pr-[40px] py-4 pl-4 rounded-lg focus:outline-none"
            placeholder="Enter a prompt here"
          />
          <button
            className="absolute top-[25%] right-4 border-none cursor-pointer"
            onClick={handleInput}
          >
            <i className="fi fi-rr-paper-plane-top"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
