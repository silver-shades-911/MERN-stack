import { useState } from 'react'
import './App.css'
import "./components/Navbar.jsx"
import Navbar from './components/Navbar.jsx'
import TextInputForm from './components/TextInputForm.jsx'
import AboutUs from './components/AboutUs.jsx'


function App() {

  return (
    <>
     <Navbar brand="TextUtils" navOption="About Us" />
     <div className='container mt-3'>
      {/* <TextInputForm heading="Enter text here"/> */}
      <AboutUs/>
     </div>
    </>
  )
}

export default App;
