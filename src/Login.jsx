import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  let [x, setx] = useState("");
  let [y, sety] = useState("");

  async function show() {
    let result = await fetch(
      `https://student-info-backend-75ai.onrender.com/login?x=${x}&y=${y}`
    );

    let data = await result.json();

    if (data == "valid") {
      navigate("/Dash");
    } else {
      alert("Invalid Password");
    }
  }

 return (

<div className="login-page">

    <div className="login-box">


        <h2>Welcome Back 👋</h2>


        <p className="subtitle">
            Sign in to access the Student Information System.
        </p>



        <label>Student ID</label>

        <input
            type="text"
            placeholder="Enter Student ID"
            onChange={(e)=>setx(e.target.value)}
        />



        <label>Password</label>

        <input
            type="password"
            placeholder="Enter Password"
            onChange={(e)=>sety(e.target.value)}
        />



        <button onClick={show}>
            Sign In
        </button>



        <p className="register-text">

            Don't have an account?

            <NavLink to="/registration">
                Create Account
            </NavLink>

        </p>


    </div>

</div>

);
}

export default Login;