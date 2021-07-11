import { useRef, useContext, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";
import { produce } from "immer";

const Card = ({ color, text, date, id }) => {
  const inputRef = useRef();

  const [notes, setNotes] = useContext(NotesContext);

  const focusTextArea = () => {
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    const text = e.target.value;
    let index;
    notes.forEach((note, i) => {
      if (note.key === e.target.id) {
        index = i;
      }
    });
    setNotes((currentNotes) =>
      produce(currentNotes, (v) => {
        v[index].text = text;
      })
    );
  };

  return (
    <div
      className={`${color} w-52 h-60 rounded-md mr-5 mb-5 mt-5 md:mb-0 flex flex-col items-center pt-5`}
    >
      <textarea
        ref={inputRef}
        spellCheck="false"
        autoCorrect="off"
        autoComplete="off"
        className="text-justify px-2 font-semibold resize-none bg-transparent outline-none w-48 h-52"
        maxLength="150"
        id={id}
        onChange={handleChange}
      ></textarea>
      <div className="extra-stuff h-8 flex justify-between w-full">
        <span className="ml-5 -mt-2">{date}</span>
        <button
          className="w-8 h-8 rounded-full mr-4 -mt-4 bg-black"
          onClick={focusTextArea}
        >
          <i className="fas fa-pen text-white text-xs"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
