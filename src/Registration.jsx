import { useState } from "react";
import { useNavigate } from "react-router-dom";
  function Registration(){
     let navigate=useNavigate();
     let [x,setx]= useState();
     let [y,sety]= useState();
     let [z,setz]= useState();
     let [q,setq]= useState();
     let [w,setw]= useState();

     async function show(){
        let res = await fetch(`http://localhost:8899/reg?x=${x}&y=${y}&z=${z}&q=${q}`);
        let data = await res.json();
        alert("Saved succesfully")
         if(data=="Saved succesfully"){
          navigate("/Login");
        }else{
          alert("invalid");
        }
  }


  return<>
      <div className="outer1">
        <h4>Enter Details :</h4>
       <input type="text" placeholder=" Id" onChange={(e)=>setx(e.target.value)}/>
       <input type="text" placeholder=" Name" onChange={(e)=>sety(e.target.value)}/>
      <input type="text" placeholder="Mobile" onChange={(e)=>setz(e.target.value)}/>
      <input type="text" placeholder="password" onChange={(e)=>setq(e.target.value)}/>
    
       <button onClick={show}>Save</button>
     
       {w}
        </div>
 </>
}
  export default Registration;