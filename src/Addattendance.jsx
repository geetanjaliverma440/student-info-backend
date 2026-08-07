import { useState } from "react";
import { useNavigate } from "react-router-dom";

  function Addattendance(){
     let navigate=useNavigate();
     let [a,seta]= useState();
     let [b,setb]= useState();
     let [c,setc]= useState();
     let [d,setd]= useState();
     let [e,sete]= useState();
     let [f,setf]= useState();
     let [w,setw]= useState();

     async function show(){
        let res = await fetch(`https://student-info-backend-75ai.onrender.com/attendance?a=${a}&b=${b}&c=${c}&d=${d}&e=${e}&f=${f}`);
        let data = await res.json();
        alert("Saved succesfully")
         if(data=="Saved succesfully"){
          navigate("/addmarks");
        }else{
          alert("invalid");
        }
  }


  return<>
      <div className="outer1">
        <h3>Add Attendance</h3>
        <h4>Enter Details :</h4>
       <input type="text" placeholder="Id" onChange={(e)=>seta(e.target.value)}/>
       <input type="text" placeholder="Name" onChange={(e)=>setb(e.target.value)}/>
      <input type="text" placeholder="Subject" onChange={(e)=>setc(e.target.value)}/>
      <input type="text" placeholder="Month" onChange={(e)=>setd(e.target.value)}/>
      <input type="text" placeholder="Total Classes" onChange={(e)=>sete(e.target.value)}/>
      <input type="text" placeholder="Attended Classes" onChange={(e)=>setf(e.target.value)}/>
    
       <button onClick={show}>Save</button>
     
       {w}
        </div>
 </>
}
  export default Addattendance;