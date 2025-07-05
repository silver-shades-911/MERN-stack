import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Conversation from "./pages/Conversation";
import Profile from "./pages/Profile";
import MainLayout from "./layout/MainLayout";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "./features/auth/authAPI";
import { useEffect } from "react";

function App() {
  // dispatch
  const dispatch = useDispatch();

  // useEffect for fetch current user
  useEffect(() => {
    dispatch(fetchCurrentUser()); // this current user data we need for frontend to display and conditional rendering
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="conversation" element={<Conversation />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login"  element={<Login />} />
      </Routes>
    </>
  );
}

export default App;


// ⚠️ Cookie Limitation Note:
// Browsers share cookies across tabs/windows for the same origin.
// So if you log in with two different users in two tabs of the same browser,
// the latest login will overwrite the previous session (since JWT is stored in a shared cookie).
// ✅ Use different browsers, Incognito mode, or Chrome profiles for multi-user testing.
