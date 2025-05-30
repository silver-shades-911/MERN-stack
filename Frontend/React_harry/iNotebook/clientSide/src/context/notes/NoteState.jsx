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
      description: "AMD recently released Flow igpu 34 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id unde similique ducimus quod voluptatum debitis, rem, totam alias delectus officia a excepturi error accusamus, placeat asperiores odit. Atque, molestias laudantium?",
      tag: ["#AMD", "#BOOST", "#Mango"],
      date: "2025-05-29T09:00:15.461Z",
      __v: 0,
    },
     {
      _id: "68381c515ecbasdfe1e5bccvcvdb0ae",
      ownerID: "68373855df8be0f59a6ee7a6",
      title: "How to use intel ",
      description:
        "intel  is best laptop ever, buy it first  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id unde similique ducimus quod voluptatum debitis, rem, totam alias delectus officia a excepturi error accusamus, placeat asperiores odit. Atque, molestias laudantium?",
      tag: ["#macbook", "#apple", "#laptop", "#use", "#samsung"],
      date: "2025-05-29T08:35:29.840Z",
      __v: 0,
    },
    {
      _id: "6838221fe4f919a2f13cbvbcv95e8e",
      ownerID: "68373855df8be0f59a6ee7a6",
      title: "AMD wins game3478",
      description: "AMD recently released Flow igpu 34 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id unde similique ducimus quod voluptatum debitis, rem, totam alias delectus officia a excepturi error accusamus, placeat asperiores odit. Atque, molestias laudantium?",
      tag: ["#AMD", "#BOOST", "#Mango"],
      date: "2025-05-29T09:00:15.461Z",
      __v: 0,
    },
     {
      _id: "68381c515ecb89fe1bbvcbve5bb0ae",
      ownerID: "68373855df8be0f59a6ee7a6",
      title: "How to use intel ",
      description:
        "intel  is best laptop ever, buy it first  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id unde similique ducimus quod voluptatum debitis, rem, totam alias delectus officia a excepturi error accusamus, placeat asperiores odit. Atque, molestias laudantium?",
      tag: ["#macbook", "#apple", "#laptop", "#use", "#samsung"],
      date: "2025-05-29T08:35:29.840Z",
      __v: 0,
    },
    {
      _id: "6832332118221fe4f919a2asda395e8e",
      ownerID: "68373855df8be0f59a6ee7a6",
      title: "AMD wins game3478",
      description: "AMD recently released Flow igpu 34 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id unde similique ducimus quod voluptatum debitis, rem, totam alias delectus officia a excepturi error accusamus, placeat asperiores odit. Atque, molestias laudantium?",
      tag: ["#AMD", "#BOOST", "#Mango"],
      date: "2025-05-29T09:00:15.461Z",
      __v: 0,
    },
     {
      _id: "68381c515ecb89fe1e5bbddda8878799e",
      ownerID: "68373855df8be0f59a6ee7a6",
      title: "How to use intel ",
      description:
        "intel  is best laptop ever, buy it first  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id unde similique ducimus quod voluptatum debitis, rem, totam alias delectus officia a excepturi error accusamus, placeat asperiores odit. Atque, molestias laudantium?",
      tag: ["#macbook", "#apple", "#laptop", "#use", "#samsung"],
      date: "2025-05-29T08:35:29.840Z",
      __v: 0,
    },
    {
      _id: "6234348382221fe4f919a2f1395e8e",
      ownerID: "68373855df8be0f59a6ee7a6",
      title: "AMD wins game3478",
      description: "AMD recently released Flow igpu 34 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id unde similique ducimus quod voluptatum debitis, rem, totam alias delectus officia a excepturi error accusamus, placeat asperiores odit. Atque, molestias laudantium?",
      tag: ["#AMD", "#BOOST", "#Mango"],
      date: "2025-05-29T09:00:15.461Z",
      __v: 0,
    }, {
      _id: "68381c515ecb89fe1e5bb0ff876878fe",
      ownerID: "68373855df8be0f59a6ee7a6",
      title: "How to use intel ",
      description:
        "intel  is best laptop ever, buy it first  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id unde similique ducimus quod voluptatum debitis, rem, totam alias delectus officia a excepturi error accusamus, placeat asperiores odit. Atque, molestias laudantium?",
      tag: ["#macbook", "#apple", "#laptop", "#use", "#samsung"],
      date: "2025-05-29T08:35:29.840Z",
      __v: 0,
    },
    {
      _id: "6838221fe4f919a2f3343241assde8e",
      ownerID: "68373855df8be0f59a6ee7a6",
      title: "AMD wins game3478",
      description: "AMD recently released Flow igpu 34 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id unde similique ducimus quod voluptatum debitis, rem, totam alias delectus officia a excepturi error accusamus, placeat asperiores odit. Atque, molestias laudantium?",
      tag: ["#AMD", "#BOOST", "#Mango"],
      date: "2025-05-29T09:00:15.461Z",
      __v: 0,
    },
  ];

  // defining state
  let [notes, setNotes] = useState(initialNotes);



  // Function for Adding New Note
  //TODO
  const addNoteFunc = (newNote) => {
   setNotes(notes.concat(newNote)); //? here add new element in to array we can  push() but it just update existing array 
   console.log("Added")             //  duo to this our setNotes does not consider it updated value and not re-render
                                    // So we use concat , it retrun new array
  };

  // Function for Updating Note
  //TODO

  // Function for Delete Note
  //TODO 







  // passing state-setter func Pack
  let stateAndSetterFuncPack = {
    notes:notes,
    addNoteFunc:addNoteFunc,
  };

  return (
    <NoteContext.Provider value={stateAndSetterFuncPack}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
