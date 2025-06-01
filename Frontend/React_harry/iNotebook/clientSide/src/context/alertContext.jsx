//! This is Context API implementation by ChatGPT , Easy!!!

import { createContext, useState, useContext } from "react";

// create the context
const AlertContext = createContext();

// create a provider component

export const AlertProvider = ({ children }) => {
  //defining state
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  // console.log(" AlertContext: Provider mounted"); //  Should log once

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

// Create a custom hook for easy access
export const useAlert = () => {
  const context = useContext(AlertContext);
  // console.log(" useAlert hook used:", context); //  Should show live values
  return context;
};
