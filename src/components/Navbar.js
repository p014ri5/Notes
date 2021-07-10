import React, { useState } from "react";

const ColorPalette = () => {

  const colorBubbleStyling = "w-10 h-10 lg:w-6 lg:h-6 md:w-8 md:h-8 rounded-full mb-5 lg:mb-8"; 

  return (
    <>
      <div className={`${colorBubbleStyling} bg-yellow-300`}></div>
      <div className={`${colorBubbleStyling} bg-red-300`}></div>
      <div className={`${colorBubbleStyling} bg-purple-300`}></div>
      <div className={`${colorBubbleStyling} bg-blue-300`}></div>
      <div className={`${colorBubbleStyling} bg-green-300`}></div>
    </>
  );
};

const Navbar = () => {

  const [toggled, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggled)
  }

  return (
    <div className="flex flex-col border-r-2 w-20 h-screen justify-start items-center pt-5">
      <button onClick={handleClick} className="bg-black mb-5 lg:mb-8 text-white w-12 h-12 rounded-full text-5xl font-light">
        +
      </button>
      {toggled ? <ColorPalette/> : false}
    </div>
  );
};  

export default Navbar;
