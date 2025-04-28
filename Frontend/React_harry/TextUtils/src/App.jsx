import { useState } from 'react'
import './App.css'
import "./components/Navbar.jsx"
import Navbar from './components/Navbar.jsx'
import TextInputForm from './components/TextInputForm.jsx'
import AboutUs from './components/AboutUs.jsx'


function App() {
/*
 * Dark Mode from App.jsx
 - We want Darkmode control from Top component ,that why app state variable and handler function we create here and pass as props

*/

let [darkMode, setDarkMode] = useState(false);


// this is our function which change style when toggle button invoke it
function toggleModeFunc () {
  if(darkMode === false) {
    setDarkMode(
      (preValue) => {
        return !preValue;
      }
    );
    document.body.style.backgroundColor = "#17153B";
    document.body.style.color = "#C8ACD6";
  }else{
    setDarkMode(
      (preValue) => {
        return !preValue;
      }
    );
    document.body.style.backgroundColor = "#F6F0F0";
    document.body.style.color = "black";
  }
}

  return (
    <>
     <Navbar brand="TextUtils" navOption="About Us" darkMode={darkMode} toggleModeFunc={toggleModeFunc} />
     <div className='container mt-3 mainBox'>
      <TextInputForm heading="Enter text here" darkMode={darkMode}  />
      {/* <AboutUs/> */}
     </div>
    </>
  )
}

export default App;
