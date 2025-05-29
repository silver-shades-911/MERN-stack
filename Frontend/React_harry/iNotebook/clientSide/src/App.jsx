import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
    <NoteState>

        <Navbar />

        <Routes>
          <Route exact path="/home" element={<Home />}></Route>

          <Route exact path="/aboutus" element={<About />}></Route>
        </Routes>

    </NoteState>
    </>
  );
}


/*
* we are wrapping whole App.jsx into <NoteState> ... </NoteState> , so all components and nested components of our App get access of note state
! Do not use <BrowserRouter> </BrowserRouter> in App.js, Dont wrap  <BrowsweRouter> in <NoteState> </NoteState> it will block our rendering & routing

*/
export default App;
