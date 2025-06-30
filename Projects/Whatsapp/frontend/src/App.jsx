
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Conversation from "./pages/Conversation";
import Profile from "./pages/Profile";
import Info from "./pages/Info";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home"element={<Home/>} />
      <Route path="/conversation" element={<Conversation/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/info"element={<Info/>} />
    </Routes>
    </>
  )
}

export default App
