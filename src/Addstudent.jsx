import { useState } from "react";
import { useNavigate } from "react-router-dom";

  function Addstudent(){
     let navigate=useNavigate();
     let [x,setx]= useState();
     let [y,sety]= useState();
     let [z,setz]= useState();
     let [q,setq]= useState();
     let [w,setw]= useState();

     async function show(){
        let res = await fetch(`https://student-info-backend-75ai.onrender.com/student?x=${x}&y=${y}&z=${z}&q=${q}`);
        let data = await res.json();
        alert("Saved succesfully")
         if(data=="Saved succesfully"){
          navigate("/addattendance");
        }else{
          alert("invalid");
        }
  }


  return<>
      <div className="outer1">
        <h4>Enter Details Of Students :</h4>
       <input type="text" placeholder="Id" onChange={(e)=>setx(e.target.value)}/>
       <input type="text" placeholder="Name" onChange={(e)=>sety(e.target.value)}/>
      <input type="text" placeholder="Branch" onChange={(e)=>setz(e.target.value)}/>
      <input type="text" placeholder="Semester" onChange={(e)=>setq(e.target.value)}/>
    
       <button onClick={show}>Save</button>
     
       {w}
        </div>
 </>
}
  export default Addstudent;