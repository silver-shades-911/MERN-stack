import { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";


const Notes = () => {
  //* hook should be inside function body
  // accessing state & setter from noteContext
  const { notes, fetchAllNotesFunc, updateNoteFunc } = useContext(noteContext);


  // At Starting of website , we want for 1 time Fetch all notes
  useEffect(
    () => {
      fetchAllNotesFunc();
    },
    [] // at beginning
  );



  //* Logic to Update Notes

  // Need to create state variable (lcoal) ,and form like Did in new note create
  let [eForm, setForm] = useState({
    eTitle: "",
    eDescription: "",
    eTag:"",
    _id: "",
  });


  const updateEform = (note) => {
    console.log("note came in Notes from Noteitem",note);

    // on click on update Note button , and comming existing note data from Noteitem , set pur local eForm State variable value -> to show in form
    setForm({
      eTitle: note.title,
      eDescription: note.description,
      eTag: note.tag.toString(),
      date: note.date,
      ownerID: note.ownerID,
      _id: note._id,
    });
  };


  // handle eForm on change , update state value
  const onChangeEform = (e) => {
  setForm(
    (preVersion) => (
   { 
      ...preVersion,
      [e.target.name]: e.target.value
    })
  )
  };


  //* handle form submission
  // Now after submit we want to update NoteState value of noteContext
  const handleEformSubmit = (e) => {
   
    e.preventDefault();
    // passing updated Note value to updateNoteFunc in NoteState through noteContext

    console.log("eForm from submitting",eForm);

    const updatedNote = {
       title: eForm.eTitle,
       description: eForm.eDescription,
       tag: eForm.eTag,
       date: eForm.date,
       ownerID: eForm.ownerID,
       _id: eForm._id,
    };


    updateNoteFunc(updatedNote);
  };

  return (
    <div className="row row-cols-auto gy-3">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>


            <form onSubmit={handleEformSubmit}>

              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="eTitle" className="form-label">
                    Title
                  </label>
                  <input type="text" className="form-control" id="eTitle" name="eTitle" onChange={onChangeEform} value={eForm.eTitle}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="eDescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="eDescription"
                    rows="3"
                    name="eDescription"
                    onChange={onChangeEform}
                    value={eForm.eDescription}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="eTag" className="form-label">
                    Tags
                  </label>
                  <input type="text" className="form-control" id="eTag" name="eTag" onChange={onChangeEform} value={eForm.eTag}/>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Understood
                </button>
              </div>

            </form>


          </div>
        </div>
      </div>
      {notes.map((note) => (
        <div className="col" key={note._id}>
          <Noteitem note={note} updateEform={updateEform} />
        </div>
      ))}
    </div>
  );
};

export default Notes;
