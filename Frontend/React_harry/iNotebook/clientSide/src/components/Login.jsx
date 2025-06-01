import { useState } from "react";
import {useAlert} from "../context/alertContext";
import "./Login.css"

//! in raect-router V6 , useHistory replace by useNavigate
// import  useHistory from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Login = () => {

  // defining 
  let {alert, setAlert} = useAlert();

//  // useHistory Hook
//  let history = useHistory();

// useNavigate
let navigate = useNavigate();


  // state variable (local)
  let [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // onChange
  const onChange = (e) => {
    setCredentials((prevCred) => ({
      ...prevCred,
      [e.target.name]: e.target.value,
    }));
  };

  // Hnadle Form On submit

  const handleFormOnSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    let json = await response.json();
    console.log(json);
    if(json.success) {

        // Save token in local storage and redirect using history
        localStorage.setItem('authtoken', json.authtoken);

        // sending alert
        setAlert({
          type: "success",
          message: "Welcome back! login successful"
        });

        //  history.push("/");
        navigate("/");

    }else {
       // sending alert
        setAlert({
          type: "danger",
          message: "Invalid credentials, try again!"
        });
        setCredentials({
        email: "",
        password: "",
      });
        navigate("/login");
    }
  };

  return (
   <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
  <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
    <h2 className="text-center mb-4">Login</h2>
    <form onSubmit={handleFormOnSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          value={credentials.email}
          onChange={onChange}
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
          value={credentials.password}
          onChange={onChange}
          required
          minLength={5}
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

export default Login;
