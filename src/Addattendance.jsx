import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaClipboardCheck } from "react-icons/fa";

function Addattendance() {
  let navigate = useNavigate();

  let [a, seta] = useState("");
  let [b, setb] = useState("");
  let [c, setc] = useState("");
  let [d, setd] = useState("");
  let [e, sete] = useState("");
  let [f, setf] = useState("");

  async function show(e) {
     e.preventDefault();
    let res = await fetch(
      `https://student-info-backend-75ai.onrender.com/attendance?a=${a}&b=${b}&c=${c}&d=${d}&e=${e}&f=${f}`
    );

    let data = await res.json();

    alert("Saved successfully");

    if (data == "Saved succesfully") {
      navigate("/addmarks");
    } else {
      alert("Invalid");
    }
  }

  return (
    <form className="outer1" onSubmit={show}>

      <div className="title-section">
        <FaClipboardCheck className="page-icon attendance-icon" />

        <h2>Attendance Management</h2>

        <p className="subtitle">
          Record and manage student attendance efficiently.
        </p>
      </div>

      <div className="form-grid">

        <div>
          <label>Student ID</label>
          <input
            type="text"
            placeholder="Enter Student ID"
            onChange={(e) => seta(e.target.value)}
          />
        </div>

        <div>
          <label>Student Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setb(e.target.value)}
          />
        </div>

        <div>
          <label>Subject</label>
          <input
            type="text"
            placeholder="Enter Subject"
            onChange={(e) => setc(e.target.value)}
          />
        </div>

        <div>
          <label>Month</label>
          <input
            type="text"
            placeholder="Enter Month"
            onChange={(e) => setd(e.target.value)}
          />
        </div>

        <div>
          <label>Total Classes</label>
          <input
            type="number"
            placeholder="Total Classes"
            onChange={(e) => sete(e.target.value)}
          />
        </div>

        <div>
          <label>Attended Classes</label>
          <input
            type="number"
            placeholder="Attended Classes"
            onChange={(e) => setf(e.target.value)}
          />
        </div>

      </div>

      <button onSubmit={show}>Save Attendance</button>

    </form>
  );
}

export default Addattendance;