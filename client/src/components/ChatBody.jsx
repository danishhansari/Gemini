const data = [
  { message: "What is the weather in banglore", iconClass: "fi fi-ts-clouds" },
  {
    message: "Come up with recipe for an upcoming events",
    iconClass: "fi fi-rr-clouds",
  },
  {
    message: "Help design a database schema for a social media app",
    iconClass: "fi fi-ts-code-simple",
  },
  {
    message: "Road trip drive time and kid entertainment ideas",
    iconClass: "fi fi-ts-map-pin",
  },
];

const ChatBody = () => {
  return (
    <>
      <div className="max-w-[1050px] mx-auto mt-16 md:mt-8 px-4">
        <div>
          <h1 className="text-5xl ">Hello, Danish</h1>
          <h2 className="text-4xl mt-1 md:text-5xl text-gray-600 font-medium">
            How can I help you today?
          </h2>

          <div className="flex overflow-auto  mt-8 gap-4">
            {data.map((item, i) => {
              return (
                <div
                  className="bg-zinc-700 py-2 px-4 rounded-lg h-auto md:text-xl md:h-[150px]"
                  key={i}
                >
                  <p className="text-md">{item.message}</p>
                  <i className={item.iconClass}></i>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-1">
          <div className="flex gap-2">
            <p className="w-6 h-6 rounded-full bg-orange-500"></p>
            <p>My Prompt</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBody;
