import { useState, createContext } from "react";

export const NotesContext = createContext();

export const NotesContextProvider = (props) => {
  const [notes, setNotes] = useState([]);
  return (
    <NotesContext.Provider value={[notes, setNotes]}>
      {props.children}
    </NotesContext.Provider>
  );
};
