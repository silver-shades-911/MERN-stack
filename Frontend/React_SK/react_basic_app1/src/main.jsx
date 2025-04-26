import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/*
 * -------- PURPOUS -------
   - Access root element in index.html file and render the APP.jsx (it is a biggest/most-outer component) in root element Component 
   
*/
