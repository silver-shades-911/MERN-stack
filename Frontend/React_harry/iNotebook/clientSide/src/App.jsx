import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";



function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert message={"This is alert of bootstarp fro mapp"}/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>

            <Route exact path="/about" element={<About />}></Route>

            <Route exact path="/login" element={<Login/>}></Route>
            
            <Route exact path="/signup" element={<Signup/>}></Route>
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

/*
* we are wrapping whole App.jsx into <NoteState> ... </NoteState> , so all components and nested components of our App get access of note state
! Do not use <BrowserRouter> </BrowserRouter> in App.js, Dont wrap  <BrowsweRouter> in <NoteState> </NoteState> it will block our rendering & routing

*/
export default App;
