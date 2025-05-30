import {useState, useEffect, useContext} from 'react';
import noteContext from '../context/notes/noteContext';

/*
* We want to submit form data and add new Note 
TODO STEP1 - 1st sync form state and stateVariable (this stateVAriable is for this from only, not that noteState in noteContext)
TODO STEP2 - pass new Note into setter func to set notesState variable in context api

*/

const Form = () => {

/*

!  Why It Breaks
?  React hooks must be used inside the body of a functional component or a custom hook. Using useContext (or any hook) outside a component like this:

*/

  let { addNoteFunc } = useContext(noteContext);


//* STEP 1 form - local state sync

// STEP1 - initial value for newNote State Variable
let initialValue = {
    title: "",
    description: "",
    tag: []
};


// STEP1 -  defining newNote state varibale for form
let [newNote, setNewNote] = useState(initialValue);


// STEP1 - function which invoke on chnage in fields
const updateNewNoteState = (event) => {
  // console.log(event);
 setNewNote(
  (preVersion) => ({
    ...preVersion,
    [event.target.name]: event.target.value,
  })
 )
};


// STEP1 -  form submit logic
const handleFormSubmit = (event) => {
  event.preventDefault();

  //* STEP2 - pass newNote into setter function of noteState variable of noteContext
addNoteFunc(newNote);
setNewNote(initialValue);
};



  return (
    <form className=" my-4" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input type="text" className="form-control" name='title' id="title"  onChange={updateNewNoteState} value={newNote.title}/>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name='description'
          rows="3"
          onChange={updateNewNoteState}
          value={newNote.description}
        ></textarea>
      </div>
        <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          Tags
        </label>
        <input type="text" className="form-control" name='tag' id="tag"  onChange={updateNewNoteState} value={newNote.tag}/>
      </div>

      <button type="submit"  className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default Form;
