import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import App from "./App.jsx";
import Registration from "./Registration.jsx";
import Login from "./Login.jsx";
import Dash from "./Dash.jsx";
import Addstudent from "./Addstudent.jsx";
import Addattendance from "./Addattendance.jsx";
import AddMarks from "./AddMarks.jsx";
import Detail from "./Detail.jsx";

import { FaUser, FaLock, FaClipboardList } from "react-icons/fa";

function Menu() {
  return (
    <div className="outer">
      <h3>🎓 Student Information System</h3>

      <p>
        Register new students, securely log in, and manage academic
        information effortlessly.
      </p>

      <div className="buttons">
        <NavLink to="/registration">
          <button>Create Account</button>
        </NavLink>

        <NavLink to="/login">
          <button>Sign In</button>
        </NavLink>
      </div>

      {/* Feature Cards */}

      <div className="features">
        <div className="card">
          <FaUser className="icon" />
          <h3>Student Registration</h3>
          <p>Add students quickly and easily.</p>
        </div>

        <div className="card">
          <FaLock className="icon" />
          <h3>Secure Login</h3>
          <p>Safe and protected access for every user.</p>
        </div>

        <div className="card">
          <FaClipboardList className="icon" />
          <h3>Manage Records</h3>
          <p>View, update and organize student information.</p>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dash" element={<Dash />} />
        <Route path="/student" element={<Addstudent />} />
        <Route path="/addattendance" element={<Addattendance />} />
        <Route path="/addmarks" element={<AddMarks />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);