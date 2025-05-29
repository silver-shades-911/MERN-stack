import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

  // creating state  -- this is a state for note , we declear here
  const initialValue = { // initial value of state
    name: "asim",
    class: "IT-B",
  };


  const [state, setState] = useState(initialValue); // initializing state variable

  // function to update state by invoking setState

 const updateStatefunc = () => {
    setTimeout(() => {
        setState({
            name: "hero V2",
            class: "IT-X"
        });
    }, 1500);
  };


  // to pass this state & update function , wrap them into object

  const stateUpdateFuncPack = {
    state: state,
    updateStatefunc: updateStatefunc,
  };

  return (
    <NoteContext.Provider value={stateUpdateFuncPack}>
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
