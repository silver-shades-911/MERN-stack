import React, { useContext } from "react";
import PropTypes from "prop-types";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const { title, description, _id, tag } = props.note;

  //* Accessing NoteContext function to update NoteState value
  const { deleteNoteFunc, updateNoteFunc } = useContext(noteContext);  

  // Delete note handler
  const handleNoteDelete = (id) => {
   deleteNoteFunc(id);
  };

  // update note handler
  const handleNoteUpdate = (title, description, tag, id) => {
   updateNoteFunc(title, description, tag, id);
  };

  
  return (
   
      <div className="card" style={{width: "25rem"}}>
        <div className="card-header">{title}</div>
        <div className="card-body">
          <p className="card-text">{description}</p>
          <a  className="card-link">
            <i className="fa-solid fa-trash" onClick={() => handleNoteDelete(_id)}></i>
          </a>
          <a  className="card-link">
            <i className="fa-solid fa-pen-to-square" onClick={() => handleNoteUpdate(title, description, tag, _id)}></i>
          </a>
        </div>
      </div>

  );
};

Noteitem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tag: PropTypes.array,
  _id: PropTypes.string,
};

export default Noteitem;
