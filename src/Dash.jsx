import { NavLink } from "react-router-dom";

function Dash() {
    return<>
         <h1 className="heading">Welcome To This Page !</h1>
    <div className="dash">
        <NavLink to="/student"><button>Add Student</button></NavLink>
        <NavLink to="/addattendance"><button>Add Attendance</button></NavLink>
        <NavLink to="/addmarks"><button>Add Marks</button></NavLink>
        <NavLink to="/detail"><button>View Details</button></NavLink>
    </div>
    </>
}
export default Dash;