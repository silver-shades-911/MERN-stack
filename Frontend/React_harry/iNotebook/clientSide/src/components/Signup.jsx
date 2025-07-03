import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../context/alertContext.jsx";
import "./Signup.css";

const Signup = () => {
  // useAlert
  let { setAlert } = useAlert();

  // useNavigate
  let navigate = useNavigate();

  // state variable (local)
  let [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  //onchange
  const onChange = (e) => {
    setNewUser((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // handle form on submit

  const handleFormOnsubmit = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    let json = await response.json();
    if (json.success) {
      localStorage.setItem("authtoken", json.authtoken);
      setAlert({
        type: "success",
        message: "Welcome! signup is successful",
      });
      navigate("/");
    } else {
      setAlert({
        type: "danger",
        message: "Failed to create user, try again!",
      });
      setNewUser({
        username: "",
        email: "",
        password: "",
      });
      navigate("/signup");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleFormOnsubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="username"
              name="username"
              onChange={onChange}
              value={newUser.username}
              minLength={3}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              name="email"
              onChange={onChange}
              value={newUser.email}
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={onChange}
              value={newUser.password}
              minLength={5}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
