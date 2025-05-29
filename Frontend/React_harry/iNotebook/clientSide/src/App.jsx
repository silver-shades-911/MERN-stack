import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/home" element={<Home />}></Route>

          <Route exact path="/aboutus" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
