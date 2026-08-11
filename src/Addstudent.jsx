import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";

function Addstudent() {
  let navigate = useNavigate();

  let [x, setx] = useState("");
  let [y, sety] = useState("");
  let [z, setz] = useState("");
  let [q, setq] = useState("");

  async function show(e) {
     e.preventDefault();
    let res = await fetch(
      `https://student-info-backend-75ai.onrender.com/student?x=${x}&y=${y}&z=${z}&q=${q}`
    );

    let data = await res.json();

    alert("Saved successfully");

    if (data == "Saved succesfully") {
      navigate("/addattendance");
    } else {
      alert("Invalid");
    }
  }

  return (
    <form className="outer1" onSubmit={show}>

      <div className="title-section">
        <FaUserGraduate className="page-icon" />

        <h2>Add New Student</h2>

        <p className="subtitle">
          Fill in the details below to register a new student.
        </p>
      </div>

      <label>Student ID</label>
      <input
        type="text"
        placeholder="Enter Student ID"
        onChange={(e) => setx(e.target.value)}
      />

      <label>Student Name</label>
      <input
        type="text"
        placeholder="Enter Student Name"
        onChange={(e) => sety(e.target.value)}
      />

      <label>Branch</label>
      <input
        type="text"
        placeholder="Enter Branch"
        onChange={(e) => setz(e.target.value)}
      />

      <label>Semester</label>
      <input
        type="text"
        placeholder="Enter Semester"
        onChange={(e) => setq(e.target.value)}
      />

      <button type="submit">Save Student</button>

    </form>
  );
}

export default Addstudent;