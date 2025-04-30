import { useState } from "react";
import "./App.css";
import "./components/Navbar.jsx";
import Navbar from "./components/Navbar.jsx";
import TextInputForm from "./components/TextInputForm.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Alert from "./components/Alert.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  /*
 * Dark Mode from App.jsx
 - We want Darkmode control from Top component ,that why app state variable and handler function we create here and pass as props

*/

  let [darkMode, setDarkMode] = useState(false);

  // this is our function which change style when dark mode toggle button invoke it
  function toggleModeFunc() {
    if (darkMode === false) {
      setDarkMode((preValue) => {
        return !preValue;
      });
      document.body.style.backgroundColor = "#17153B";
      document.body.style.color = "#C8ACD6";
      document.title = "TextUtils - Home | Dark Mode";
      showAlert("Dark Mode is Enabled", "success");
    } else {
      setDarkMode((preValue) => {
        return !preValue;
      });
      document.body.style.backgroundColor = "#F6F0F0";
      document.body.style.color = "black";
      document.title = "TextUtils - Home | Light Mode";
      showAlert("Light Mode is Enabled", "success");
    }
  }

  // alert functionality , why we are writing here , because we have to pass that state variables and functions to different childs ,basicllly we can only pass from higher level --->  lower level

  let [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Navbar
        brand="TextUtils"
        navOption="About Us"
        darkMode={darkMode}
        toggleModeFunc={toggleModeFunc}
      />
      <Alert alert={alert} />
      <div className="container mt-3 mainBox">
        <Routes>
          <Route
            path="/"
            element={
              <TextInputForm
                heading="Try TextUtils - word counter, character counter, remove extra spaces"
                darkMode={darkMode}
                showAlert={showAlert}
              />
            }
          />
          <Route path="/about" element={<AboutUs darkMode={darkMode} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
