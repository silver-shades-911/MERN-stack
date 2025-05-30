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
  
  //* for simplicity to implementing context api use hardcode value insted ,api 
  let initialNotes = [
  {
    "_id": "68381c515ecb89fe1e5bb0ae",
    "ownerID": "68373855df8be0f59a6ee7a6",
    "title": "How to use intel ",
    "description": "intel  is best laptop ever, buy it first",
    "tag": [
      "#macbook",
      "#apple",
      "#laptop",
      "#use",
      "#samsung"
    ],
    "date": "2025-05-29T08:35:29.840Z",
    "__v": 0
  },
  {
    "_id": "6838221fe4f919a2f1395e8e",
    "ownerID": "68373855df8be0f59a6ee7a6",
    "title": "AMD wins game3478",
    "description": "AMD recently released Flow igpu 34 ",
    "tag": [
      "#AMD",
      "#BOOST",
      "#Mango"
    ],
    "date": "2025-05-29T09:00:15.461Z",
    "__v": 0
  }
];

// defining state
let [notes, setNotes] = useState(initialNotes);

// passing state-setter func Pack
let stateAndSetterFuncPack = {
  notes,
  setNotes
};

  return (
    <NoteContext.Provider value={stateAndSetterFuncPack}> 
        {props.children} 
    </NoteContext.Provider>
  );
};

export default NoteState;
