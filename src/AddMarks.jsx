import { useState } from "react";
import "./AddMarks.css";
import { FaChartBar } from "react-icons/fa";
function AddMarks() {
    const [id, setId] = useState("");

    const [subject1, setSubject1] = useState("");
    const [subject2, setSubject2] = useState("");
    const [subject3, setSubject3] = useState("");
    const [subject4, setSubject4] = useState("");

    const [marks1, setMarks1] = useState("");
    const [marks2, setMarks2] = useState("");
    const [marks3, setMarks3] = useState("");
    const [marks4, setMarks4] = useState("");

    const saveMarks = async (e) => {
         e.preventDefault();
        const data = {
            id,
            subject1,
            marks1,
            subject2,
            marks2,
            subject3,
            marks3,
            subject4,
            marks4
        };

        const response = await fetch("https://student-info-backend-75ai.onrender.com/addmarks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        alert(result.message);
    };

    return (
        <form className="page" onSubmit={saveMarks}>

            <div className="marks-box">

               <div className="title-section">
    <FaChartBar className="marks-icon"/>

    <h2>Student Marks</h2>

    <p className="subtitle">
        Enter subject names and marks for the selected student.
    </p>
</div>
                {/* ID */}
                <div className="id-section">
                    <label>ID</label>

                    <input
                        type="number"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Enter ID"
                    />
                </div>


                {/* Heading */}
                <div className="heading-row">
                    <span>Subject</span>
                    <span>Marks</span>
                </div>


                {/* Row 1 */}
                <div className="marks-row">
                    <input
                        type="text"
                        placeholder="Subject 1"
                        value={subject1}
                        onChange={(e) => setSubject1(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Marks"
                        value={marks1}
                        onChange={(e) => setMarks1(e.target.value)}
                    />
                </div>


                {/* Row 2 */}
                <div className="marks-row">
                    <input
                        type="text"
                        placeholder="Subject 2"
                        value={subject2}
                        onChange={(e) => setSubject2(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Marks"
                        value={marks2}
                        onChange={(e) => setMarks2(e.target.value)}
                    />
                </div>


                {/* Row 3 */}
                <div className="marks-row">
                    <input
                        type="text"
                        placeholder="Subject 3"
                        value={subject3}
                        onChange={(e) => setSubject3(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Marks"
                        value={marks3}
                        onChange={(e) => setMarks3(e.target.value)}
                    />
                </div>


                {/* Row 4 */}
                <div className="marks-row">
                    <input
                        type="text"
                        placeholder="Subject 4"
                        value={subject4}
                        onChange={(e) => setSubject4(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Marks"
                        value={marks4}
                        onChange={(e) => setMarks4(e.target.value)}
                    />
                </div>


                {/* Save button */}
                <button className="save-btn" onClick={saveMarks}>
                   Submit Marks
                </button>

            </div>

        </form>
    );
}

export default AddMarks;