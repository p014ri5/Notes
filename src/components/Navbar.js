import React, { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import { nanoid } from "nanoid";

const ColorPalette = () => {
  const [notes, setNotes] = useContext(NotesContext);

  const createNote = (e) => {
    let setColor = e.target.classList[e.target.classList.length - 1];
    let now = String(new Date()).split(" ");
    let setDate = `${now[1]} ${now[2]}, ${now[3]}`;
    setNotes([
      {
        color: setColor,
        text: "",
        date: setDate,
        key: nanoid(),
      },
      ...notes,
    ]);
  };

  const colorBubbleStyling =
    "cursor-pointer lg:w-6 lg:h-6 w-8 h-8 rounded-full mb-5 lg:mb-8";

  return (
    <>
      <div
        className={`${colorBubbleStyling} bg-yellow-300`}
        onClick={createNote}
      ></div>
      <div
        className={`${colorBubbleStyling} bg-red-300`}
        onClick={createNote}
      ></div>
      <div
        className={`${colorBubbleStyling} bg-purple-300`}
        onClick={createNote}
      ></div>
      <div
        className={`${colorBubbleStyling} bg-blue-300`}
        onClick={createNote}
      ></div>
      <div
        className={`${colorBubbleStyling} bg-green-300`}
        onClick={createNote}
      ></div>
    </>
  );
};

const Navbar = () => {
  const [toggled, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggled);
  };

  return (
    <div className="flex flex-col border-r-2 px-8 md:w-28 h-screen justify-start items-center pt-5">
      <h4 className="text-xl mt-5">Docket</h4>
      <button
        onClick={handleClick}
        className="bg-black mt-16 mb-5 lg:mb-8 text-white w-10 h-10 rounded-full text-4xl outline-none font-light"
      >
        +
      </button>
      {toggled ? <ColorPalette /> : false}
    </div>
  );
};

export default Navbar;
