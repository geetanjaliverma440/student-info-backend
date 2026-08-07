import { useState } from "react";
import { useNavigate } from "react-router-dom";
  function Login(){
     let navigate = useNavigate();
     let [x,setx]= useState();
     let [y,sety]= useState();
  

     async function show(){
        let result = await fetch(`http://localhost:8899/login?x=${x}&y=${y}`);
        let data = await result.json();
        
        if(data=="valid"){
          navigate("/Dash");
        }else{
          alert("invalid password");
        }
  }


  return<>
        <div className="search">
              <div className="box">
                 <input type="text" placeholder="ID " onChange={(e)=>setx(e.target.value)}/> <br />
                 <input type="text" placeholder="Password" onChange={(e)=>sety(e.target.value)}/> <br />
                <button onClick={show}>Login</button>
              </div>
             
        </div>
       
 </>
}
  export default Login;