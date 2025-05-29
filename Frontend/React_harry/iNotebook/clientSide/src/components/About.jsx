import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

// here, we want to access our note state

const About = () => {
  // this will give us
  const stateUpdateFuncPack = useContext(noteContext); // useContext bring desired context state or data  e.g. from noteContext

  // lets invoke our updateStateFunc
  useEffect(() => {  // we use useEffect to do something before rendering
    stateUpdateFuncPack.updateStatefunc();
  }, []);

  return (
    <div>
      <p>
        In About name is {stateUpdateFuncPack.state.name} and he is in class{" "}
        {stateUpdateFuncPack.state.class}
      </p>
    </div>
  );
};

export default About;
