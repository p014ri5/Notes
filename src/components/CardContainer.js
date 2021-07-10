const CardContainer = () => {
  return (
    <div className="h-screen px-16 pt-16 flex flex-wrap">
      <div className="bg-red-300 w-52 h-60 rounded-md flex flex-col items-center pt-5">
        <textarea
          spellCheck="false"
          autoCorrect="off"
          autoComplete="off"
          className="text-justify px-2 font-semibold resize-none bg-transparent outline-none w-48 h-52"
          id=""
          cols="30"
          rows="10"
          maxLength="150"
        ></textarea>
        <div className="extra-stuff h-8 flex justify-between w-full">
          <span className="ml-5 -mt-2">May 20, 2021</span>
          <button className="w-8 h-8 rounded-full mr-4 -mt-4 bg-black"></button>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
