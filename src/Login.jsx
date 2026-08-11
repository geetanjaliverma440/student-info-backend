import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [x, setx] = useState("");
  const [y, sety] = useState("");
  const [loading, setLoading] = useState(false);

  async function show(e) {
    e.preventDefault(); // Prevent page/form reload

    if (!x || !y) {
      alert("Please enter Student ID and Password");
      return;
    }

    try {
      setLoading(true);

      const result = await fetch(
        `https://student-info-backend-75ai.onrender.com/login?x=${encodeURIComponent(
          x
        )}&y=${encodeURIComponent(y)}`
      );

      if (!result.ok) {
        throw new Error(`Server error: ${result.status}`);
      }

      const data = await result.json();

      console.log("Login response:", data);

      if (data === "valid") {
        navigate("/Dash");
      } else {
        alert("Invalid Password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Unable to connect to server. Please try again.");
    } finally {
      setLoading(false);
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

        <button type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
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