// import React, { useContext, useEffect } from "react";
// import noteContext from "../context/notes/noteContext";


//! Basic context use example
// here, we want to access our note state

const About = () => {
  // // this will give us
  // const stateUpdateFuncPack = useContext(noteContext); // useContext bring desired context state or data  e.g. from noteContext

  // lets invoke our updateStateFunc
  // useEffect(() => {  // we use useEffect to do something before rendering
  //   stateUpdateFuncPack.updateStatefunc();
  // }, []);

  return (
    <div>
      <p>
        This is About Page
        {/* {stateUpdateFuncPack.state.class} */}
      </p>
    </div>
  );
};

export default About;
