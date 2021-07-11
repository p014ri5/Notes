import { useContext } from "react";
import { NotesContext } from "../context/NotesContext.js";

import Card from "./Card.js";

const CardContainer = () => {
  const [notes] = useContext(NotesContext);

  return (
    <div className="h-screen px-16 overflow-scroll pt-16 flex flex-wrap">
      {notes.map((note) => {
        return (
          <Card
            text={note.text}
            color={note.color}
            date={note.date}
            id={note.key}
            key={note.key}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
