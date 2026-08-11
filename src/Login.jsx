
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  let [x, setx] = useState("");
  let [y, sety] = useState("");

  async function show(e) {
    e.preventDefault();

    try {
      let result = await fetch(
        `https://student-info-backend-75ai.onrender.com/login?x=${encodeURIComponent(x)}&y=${encodeURIComponent(y)}`
      );

      let data = await result.json();

      if (data === "valid") {
        navigate("/Dash");
      } else {
        alert("Invalid Password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Unable to connect to server");
    }
  }

  return (
    <form className="login-page" onSubmit={show}>
      <div className="login-box">

        <h2>Welcome Back 👋</h2>

        <p className="subtitle">
          Sign in to access the Student Information System.
        </p>

        <label>Student ID</label>

        <input
          type="text"
          placeholder="Enter Student ID"
          value={x}
          onChange={(e) => setx(e.target.value)}
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Enter Password"
          value={y}
          onChange={(e) => sety(e.target.value)}
        />

        <button type="submit">
          Sign In
        </button>

        <p className="register-text">
          Don't have an account?

          <NavLink to="/registration">
            Create Account
          </NavLink>
        </p>

      </div>
    </form>
  );
}

export default Login;

