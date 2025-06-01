import React, { useContext } from "react";
import PropTypes from "prop-types";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const { title, description, _id, tag } = props.note;
  const  updateEform = props.updateEform;
  console.log(props);

  //* Accessing NoteContext function to update NoteState value
  const { deleteNoteFunc  } = useContext(noteContext);  

  // Delete note handler
  const handleNoteDelete = (id) => {
   deleteNoteFunc(id);
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
            <i className="fa-solid fa-pen-to-square" onClick={() => 
              { updateEform(props.note);}}></i>
          </a>
           <p className="card-text"><small className="text-body-secondary">tags: {tag.join(", ")}</small></p>
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



//*  <i className="fa-solid fa-pen-to-square" onClick={() => updateEform(props.note)}></i>
//   we pass updateEform function from Notes to noteItem so , when click on individual noteitems edit button it invoke update function in Notes  