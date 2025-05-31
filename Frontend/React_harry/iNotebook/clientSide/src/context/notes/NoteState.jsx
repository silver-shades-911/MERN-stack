import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  /*

  * LEARNING - CONTEXT API 

  ?  creating state  -- this is a state for note , we declear here
  const initialValue = { // initial value of state
    name: "asim",
    class: "IT-B",
  };


  const [state, setState] = useState(initialValue); // initializing state variable

  ? function to update state by invoking setState
 const updateStatefunc = () => {
    setTimeout(() => {
        setState({
            name: "hero V2",
            class: "IT-X"
        });
    }, 1500);
  };


  ? to pass this state & update (setter)function  pair, wrap them into object
  const stateUpdateFuncPack = {
    state: state,
    updateStatefunc: updateStatefunc,
  };


  */

  //=========================================================================================

  //! Dev Tip :-  for simplicity to implementing context api use hardcode value insted  to build functionalities like CRUD,api

/*
! PHASE I
  let initialNotes = [
    {
      _id: "68381c515esadsdccb8ade1e5bb0ae",
      ownerID: "68373855df8be0f59a6ee7a6",
      title: "How to use intel ",
      description:
        "intel  is best laptop ever, buy it first  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id unde similiqu intel  is best laptop ever, buy it first  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id unde similiqintel  is best laptop ever, buy it first  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id unde similiqintel  is best laptop ever, buy it first  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id unde similiqe ducimus quod voluptatum debitis, rem, totam alias delectus officia a excepturi error accusamus, placeat asperiores odit. Atque, molestias laudantium?",
      tag: ["#macbook", "#apple", "#laptop", "#use", "#samsung"],
      date: "2025-05-29T08:35:29.840Z",
      __v: 0,
    },
    {
      _id: "6838221fe4f919a2f1395anmnbmbsde",
      ownerID: "68373855df8be0f59a6ee7a6",
      title: "AMD wins game3478",
      description:
        "AMD recently released Flow igpu 34 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id unde similique ducimus quod voluptatum debitis, rem, totam alias delectus officia a excepturi error accusamus, placeat asperiores odit. Atque, molestias laudantium?",
      tag: ["#AMD", "#BOOST", "#Mango"],
      date: "2025-05-29T09:00:15.461Z",
      __v: 0,
    }
  ];
*/

// URL
const host = "http://localhost:5000/";


//! PHASE II
let initialValue = []


// defining state
let [notes, setNotes] = useState(initialValue);


// Function to Fetch all notes from API 
const fetchAllNotesFunc = async() => {
    let response = await fetch(`${host}api/note/fetchallnote`, {
      method: 'GET', // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgzNzM4NTVkZjhiZTBmNTlhNmVlN2E2In0sImlhdCI6MTc0ODUwNTAyMX0.X4PmSUnkDPADafg9CHwpDQCGeJ_i048BbDzhz4Jkz1o'
        // Add other headers as needed
      },

    })
    let json = await response.json();
    setNotes(json);
};

//! PHASE I
  // // Function for Adding New Note
  // const addNoteFunc = (newNote) => {

  //     // TODO API Call

  //   setNotes(notes.concat(newNote)); //? here add new element in to array we can  push() but it just update existing array
  //   console.log("Added"); //  duo to this our setNotes does not consider it updated value and not re-render
  //   // So we use concat , it retrun new array
  // };

 //! PHASE II
 // creating function for add new note

    const addNoteFunc = async(newNote) => {
     
     let response = await fetch(`${host}api/note/createnote`, {
      method: 'POST', // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgzNzM4NTVkZjhiZTBmNTlhNmVlN2E2In0sImlhdCI6MTc0ODUwNTAyMX0.X4PmSUnkDPADafg9CHwpDQCGeJ_i048BbDzhz4Jkz1o'
        // Add other headers as needed
      },
      body: JSON.stringify(newNote)
    });
    let json = await response.json();
    console.log(json);

    };


//! PHASE I
// Delete a note
  // const deleteNoteFunc = (id) => {
  //   console.log("Note is deleted having _id", id);

  //     // TODO API Call

  //   let updatedNotes = notes.filter((note) => {
  //     return note._id !== id;
  //   });
  //   setNotes(updatedNotes);
  // };


//! PHASE II
// Delete a note through api
const deleteNoteFunc = async (id) => {
    
     let response = await fetch(`${host}api/note/deletenote/${id}`, {
      method: 'DELETE', // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgzNzM4NTVkZjhiZTBmNTlhNmVlN2E2In0sImlhdCI6MTc0ODUwNTAyMX0.X4PmSUnkDPADafg9CHwpDQCGeJ_i048BbDzhz4Jkz1o'
        // Add other headers as needed
      }
    });
    let json = await response.json();
    console.log(json);

  };




// Function for Updating Note

//! PHASE I
/* const updateNoteFunc = (note) => {


* This for loop we use in our Hard code value Version      
    for (let index = 0; index <= notes.length; index++) {
      let element = notes[index];

      // Always filter / purify data
      if (!element || !element._id) {
        console.error("Invalid note passed to updateNoteFunc", element);
        return;
      };

      // for update
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }

    console.log(note);


  };

  */

  //!PHASE II

  const updateNoteFunc = async(updatedNoteData) => {

    console.log("Updated Note data from NoteState ",updatedNoteData);

    let response = await fetch(`${host}api/note/updatenote/${updatedNoteData._id}`, {
      method: 'PUT', // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgzNzM4NTVkZjhiZTBmNTlhNmVlN2E2In0sImlhdCI6MTc0ODUwNTAyMX0.X4PmSUnkDPADafg9CHwpDQCGeJ_i048BbDzhz4Jkz1o'
        // Add other headers as needed
      },
      body: JSON.stringify({
        title: updatedNoteData.title,
        description: updatedNoteData.description,
        tag: updatedNoteData.tag,
      }), // optional body for POST/PUT requests
    });
    let json = await response.json();
    console.log(json);


  }

  // passing state-setter func Pack
  let stateAndSetterFuncPack = {
    notes,
    addNoteFunc,
    deleteNoteFunc,
    updateNoteFunc,
    fetchAllNotesFunc,
  };

  return (
    <NoteContext.Provider value={stateAndSetterFuncPack}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
