import { useState } from "react";

//! in raect-router V6 , useHistory replace by useNavigate
// import  useHistory from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Login = () => {

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
        localStorage.setItem('token', json.authtoken);
        //  history.push("/");
        navigate("/");

    }else {
        alert("Invalid Access");
    }
  };

  return (
    <div>
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
          />
          <div id="email" className="form-text">
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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
