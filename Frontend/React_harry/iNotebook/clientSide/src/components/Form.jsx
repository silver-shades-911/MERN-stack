import {useState, useEffect, useContext} from 'react';
import noteContext from '../context/notes/noteContext';
import { TagsInput } from "react-tag-input-component";


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

//! ERROR - bcz tag is not object now 
/* 👉 The problem is that event in this case is not an event object like in an <input> — it’s an array of tags (e.g., ["mango", "apple"]).

So event.target.name gives the error:

❌ Cannot read properties of undefined (reading 'name')

*/
// // STEP1 - function which invoke on chnage in fields
// const updateNewNoteState = (event) => {
//   // console.log(event);
//  setNewNote(
//   (preVersion) => (
//     console.log(event)
//     ,{
//     ...preVersion,
//     [event.target.name]: event.target.value,
//   })
//  )
// };


//
const updateNewNoteState = (event) => {
  const { name, value } = event.target;
  setNewNote((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const updateTags = (tagsArray) => {
  setNewNote((prev) => ({
    ...prev,
    tag: tagsArray,
  }));
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
        <input type="text" className="form-control" name='title' id="title"  onChange={updateNewNoteState} value={newNote.title} required minLength={5}/>
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
          minLength={15}
          required
        ></textarea>
      </div>
        <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          Tags
        </label>
        <TagsInput
        value={newNote.tag}
        onChange={updateTags}
        name="tag"
        placeHolder="Enter tags "
      />
       <em>press enter or comma to add new tag</em>
      </div>

      <button type="submit"  className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default Form;
