import { NavLink } from "react-router-dom";
import {
  FaUserPlus,
  FaClipboardCheck,
  FaChartBar,
  FaAddressCard
} from "react-icons/fa";

function Dash() {
  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Welcome, Admin!</h1>

        <p>
          Welcome! Choose an option below to manage student information.
        </p>
      </div>

      <div className="cards">

        <NavLink to="/student" className="card-link">
          <div className="dash-card">
            <FaUserPlus className="dash-icon student-icon" />
            <h3>Add Student</h3>
            <p>Register new students quickly.</p>
          </div>
        </NavLink>

        <NavLink to="/addattendance" className="card-link">
          <div className="dash-card">
            <FaClipboardCheck className="dash-icon attendance-icon" />
            <h3>Attendance</h3>
            <p>Record daily attendance.</p>
          </div>
        </NavLink>

        <NavLink to="/addmarks" className="card-link">
          <div className="dash-card">
            <FaChartBar className="dash-icon marks-icon" />
            <h3>Add Marks</h3>
            <p>Update student marks.</p>
          </div>
        </NavLink>

        <NavLink to="/detail" className="card-link">
          <div className="dash-card">
            <FaAddressCard className="dash-icon details-icon" />
            <h3>View Details</h3>
            <p>View student records.</p>
          </div>
        </NavLink>

      </div>

    </div>
  );
}

export default Dash;