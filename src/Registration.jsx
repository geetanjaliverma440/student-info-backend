import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();

  const [x, setx] = useState("");
  const [y, sety] = useState("");
  const [z, setz] = useState("");
  const [q, setq] = useState("");
  const [loading, setLoading] = useState(false);

  async function show(e) {
    e.preventDefault();

    if (!x || !y || !z || !q) {
      alert("Please fill all the fields");
      return;
    }

    try {
      setLoading(true);

      const url =
        `https://student-info-backend-75ai.onrender.com/reg` +
        `?x=${encodeURIComponent(x)}` +
        `&y=${encodeURIComponent(y)}` +
        `&z=${encodeURIComponent(z)}` +
        `&q=${encodeURIComponent(q)}`;

      console.log("Registration URL:", url);

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();

      console.log("Registration response:", data);

      if (data === "Saved succesfully" || data === "Saved successfully") {
        alert("Saved successfully");
        navigate("/login");
      } else {
        alert("Registration failed");
      }
    } catch (err) {
      console.error("Registration error:", err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="outer1" onSubmit={show}>

      <h2>Create Your Account</h2>

      <p className="subtitle">
        Join the Student Information System and manage student records securely.
      </p>

      <label>Student ID</label>

      <input
        type="text"
        placeholder="Enter Student ID"
        value={x}
        onChange={(e) => setx(e.target.value)}
      />

      <label>Full Name</label>

      <input
        type="text"
        placeholder="Enter Full Name"
        value={y}
        onChange={(e) => sety(e.target.value)}
      />

      <label>Mobile Number</label>

      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={z}
        onChange={(e) => setz(e.target.value)}
      />

      <label>Password</label>

      <input
        type="password"
        placeholder="Create Password"
        value={q}
        onChange={(e) => setq(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Creating Account..." : "Create Account"}
      </button>

      <p className="login-text">
        Already have an account?
        <NavLink to="/login"> Sign In</NavLink>
      </p>

    </form>
  );
}

export default Registration;