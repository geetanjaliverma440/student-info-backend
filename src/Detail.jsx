import { useState } from "react";
import "./Detail.css";
function Detail() {
  const [a, seta] = useState("");
  const [w, setw] = useState([]);
  const [z, setz] = useState([]);
  const [y, sety] = useState([]);

  async function show() {
    let result = await fetch(`http://localhost:8899/detail?a=${a}`);
    let data = await result.json();
    setw(data);

    let att = await fetch(`http://localhost:8899/viewattendance?a=${a}`);
    let attendance = await att.json();
    setz(attendance);

    let marks = await fetch(`http://localhost:8899/viewmarks?a=${a}`);
    let marksData = await marks.json();
    sety(marksData);
  }

  return (
    <>
      <div className="inputbox">
        <input
          type="search"
          placeholder="Enter ID"
          value={a}
          onChange={(e) => seta(e.target.value)}
        />
        <button onClick={show}>View</button>
      </div>

      {/* Student Details */}

      {w.length > 0 &&
        w.map((e, index) => (
        <div className="inbox" key={index}>
  <p><span>ID :</span><span>{e.id}</span></p>
  <p><span>Name :</span><span>{e.name}</span></p>
  <p><span>Branch :</span><span>{e.branch}</span></p>
  <p><span>Sem :</span><span>{e.sem}</span></p>
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
  <p><span>Month :</span><span>{e.month}</span></p>
  <p><span>Total Classes :</span><span>{e.total_days}</span></p>
  <p><span>Attended Classes :</span><span>{e.present_days}</span></p>
</div>
            ))}
          </div>

          {/* Marks */}

          <div className="marks">
            <h3 className="heading">Marks Details</h3>

            {y.map((e, index) => (
            <div className="box" key={index}>
  <p><span>{e.subject1} :</span><span>{e.marks1}</span></p>
  <p><span>{e.subject2} :</span><span>{e.marks2}</span></p>
  <p><span>{e.subject3} :</span><span>{e.marks3}</span></p>
  <p><span>{e.subject4} :</span><span>{e.marks4}</span></p>
</div>
            ))}
          </div>

        </div>
      )}
    </>
  );
}

export default Detail;