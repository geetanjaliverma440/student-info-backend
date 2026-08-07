import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();

  const [x, setx] = useState("");
  const [y, sety] = useState("");
  const [z, setz] = useState("");
  const [q, setq] = useState("");

  async function show() {
    try {
      const res = await fetch(
        `https://student-info-backend-75ai.onrender.com/reg?x=${x}&y=${y}&z=${z}&q=${q}`
      );

      const data = await res.json();

      alert("Saved successfully");

      if (data === "Saved succesfully" || data === "Saved successfully") {
        navigate("/login");
      } else {
        alert("Invalid");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  }

  return (
    <div className="outer1">

      <h2>Create Your Account</h2>

      <p className="subtitle">
        Join the Student Information System and manage student records securely.
      </p>

      <label>Student ID</label>
      <input
        type="text"
        placeholder="Enter Student ID"
        onChange={(e) => setx(e.target.value)}
      />

      <label>Full Name</label>
      <input
        type="text"
        placeholder="Enter Full Name"
        onChange={(e) => sety(e.target.value)}
      />

      <label>Mobile Number</label>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        onChange={(e) => setz(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="Create Password"
        onChange={(e) => setq(e.target.value)}
      />

      <button onClick={show}>Create Account</button>

      <p className="login-text">
        Already have an account?
        <NavLink to="/login"> Sign In</NavLink>
      </p>

    </div>
  );
}

export default Registration;