import { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

const Notes = (props) => {
  //* hook should be inside function body  
  // accessing state & setter from noteContext
  const { notes, fetchAllNotesFunc } = useContext(noteContext);


  // At Starting of website , we want for 1 time Fetch all notes 
  useEffect(
    () => {
     fetchAllNotesFunc();
    },
    [] // at beginning
)

  return (
    <div className="row row-cols-auto gy-3">
      {notes.map((note) => (
         <div className="col" key={note._id}>
        <Noteitem note={note} />
        </div>
      ))}
      
    </div>
  );
};

export default Notes;
