import { useState } from "react";
import "./Detail.css";
function Detail() {
  const [a, seta] = useState("");
  const [w, setw] = useState([]);
  const [z, setz] = useState([]);
  const [y, sety] = useState([]);

  async function show() {
    let result = await fetch(`https://student-info-backend-75ai.onrender.com/detail?a=${a}`);
    let data = await result.json();
    setw(data);

    let att = await fetch(`https://student-info-backend-75ai.onrender.com/viewattendance?a=${a}`);
    let attendance = await att.json();
    setz(attendance);

    let marks = await fetch(`https://student-info-backend-75ai.onrender.com/viewmarks?a=${a}`);
    let marksData = await marks.json();
    sety(marksData);
  }

  return (
    <>
     <div className="search-card">

    <h2>🎓 Student Details</h2>

    <p>Search student information using ID</p>

    <div className="search-box">

        <input
        type="search"
        placeholder="Enter Student ID"
        value={a}
        onChange={(e)=>seta(e.target.value)}
        />

        <button onClick={show}>
            View Details
        </button>

    </div>

</div>

      {/* Student Details */}

      {w.length > 0 &&
        w.map((e, index) => (
      <div className="inbox">

<h3>Student Information</h3>

<div className="student-row">
<span>ID</span><span>:</span><span>{e.id}</span>
</div>

<div className="student-row">
<span>Name</span><span>:</span><span>{e.name}</span>
</div>

<div className="student-row">
<span>Branch</span><span>:</span><span>{e.branch}</span>
</div>

<div className="student-row">
<span>Sem</span><span>:</span><span>{e.sem}</span>
</div>

</div>
        ))}

      {/* Attendance and Marks */}

      {(z.length > 0 || y.length > 0) && (
        <div className="content22">

          {/* Attendance */}

          <div className="attendance">
            <h3 className="heading">Attendance Details</h3>

            {z.map((e, index) => (
           <div className="box22" key={index}>
  <p><span><b>Month :</b></span> <span>{e.month}</span></p>
  <p><span><b>Total Classes :</b></span> <span>{e.total_days}</span></p>
  <p><span><b>Attended Classes :</b></span> <span>{e.present_days}</span></p>
</div>
            ))}
          </div>

          {/* Marks */}

          <div className="marks">
            <h3 className="heading">Marks Details</h3>

            {y.map((e, index) => (
            <div className="box" key={index}>
  <p><span><b>{e.subject1} :</b></span> <span>{e.marks1}</span></p>
  <p><span><b>{e.subject2} :</b></span> <span>{e.marks1}</span></p>
  <p><span><b>{e.subject3} :</b></span> <span>{e.marks1}</span></p>
  <p><span><b>{e.subject4} :</b></span> <span>{e.marks1}</span></p>
 
</div>
            ))}
          </div>

        </div>
      )}
    </>
  );
}

export default Detail;