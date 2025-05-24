import { useState } from "react";

function Form() {
  // style
  let inputStyle = { backgroundColor: "white", color: "black" };

  // Single common object as state variable, In create each form element have their own state ,so we marge thier individual states with react state
  let [formInputs, setFormInputs] = useState({
    userName: "",
    email: "",
    password: "",
  });

  //handleFormInputs  -> This function is use when change in input field's value happens

  function handleInputChange(event) {
    console.log(`${event.target.name} = ${event.target.value}`);
    setFormInputs((currInput) => {
      return {
        ...currInput,
        [event.target.name]: event.target.value,
      };
    });
  }

  //handleFormSubmit  -> This function is from form submission

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form Input ->", formInputs);

    setFormInputs({
      userName: "",
      email: "",
      password: "",
    });
  }

  return (
    <form action="#" style={{border: "1px solid black", padding: "2rem"}} onSubmit={handleFormSubmit}>
      <h2>React Basic Form</h2>
      <label htmlFor="userName">Username:</label>
      <br />
      <input
        type="text"
        name="userName"
        id="userName"
        style={inputStyle}
        value={formInputs.userName}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="">Email:</label>
      <br />
      <input
        type="email"
        name="email"
        id="email"
        style={inputStyle}
        value={formInputs.email}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="password">Password:</label>
      <br />
      <input
        type="text"
        name="password"
        id="password"
        style={inputStyle}
        value={formInputs.password}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;

/*
*  POINTS
   - Give same name in name attribute of each element as same as their respective key in state variable object 
     e.g.  <input type="text" name="userName" id="userName" style={inputStyle} onChange={handleFormInputs}/> here name="userName" same as its respective key { userName, ... } 
   - It help while updating state variable, due to similiar names give access to that key in state variable { }  

   - We use this synatx to access Objects key & manipulate , When our key is variable , keys changes 
    e.g.   [event.target.name]: event.target.value  (inside object)
           currInput[event.target.name] = event.target.value  (outside object)


*  FLOW
    
     input --> onChange --"invoke"--> handleInputChange() --> setFormInputs() --"Update state"--> formInputs [variable's state]  
    
      /\                                                                                                | 
       |                                                                                                |
       |____________________________________  Value = fromInputs     <__________________________________|
                                          ( Assigning that updated value
                                        to input fields, So it visible on UI )


     - In this Flow thier is not role of Submit Button , thier flow is different , their role is What to do after submit 
     - Above Input--value--StateVariable Flow's role is to store Data & Display Data on screen                                   
*/
