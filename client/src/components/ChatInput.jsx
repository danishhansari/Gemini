const ChatInput = () => {
  return (
    <div className="fixed bottom-2 w-full flex items-center justify-center">
      <div className="w-full max-w-[750px] px-4 py-2">
        <div className="relative inline-block w-full">
          <input
            type="text"
            className="w-full pr-[40px] py-4 pl-4 rounded-lg focus:outline-none"
            placeholder="Enter a prompt here"
          />
          <button className="absolute top-[25%] right-4 border-none cursor-pointer pointer-events-none">
            <i className="fi fi-rr-paper-plane-top"></i>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
