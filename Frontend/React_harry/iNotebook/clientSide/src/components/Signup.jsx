import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {


  // useNavigate

  let navigate = useNavigate();

// state variable (local)
let [newUser, setNewUser] = useState({
  username:"",
  email: "",
  password: ""
});


//onchange
const onChange = (e) => {
setNewUser(
  (prevData) => (
    {
      ...prevData,
      [e.target.name]: e.target.value,
    }
  )
)
};


// handle form on submit

const handleFormOnsubmit = async(e) => {
 e.preventDefault();
 let response = await fetch('http://localhost:5000/api/auth/createuser', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_token'
    },
    body: JSON.stringify(newUser)
});

  let json = await response.json();
  console.log(json);

};



  return (
    <div>
      <form onSubmit={handleFormOnsubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" aria-describedby="username" name='username' onChange={onChange} value={newUser.username} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="email" name='email' onChange={onChange} value={newUser.email} />
          <div id="email" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={newUser.password} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
