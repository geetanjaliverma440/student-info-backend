import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Registration from './Registration.jsx'
import Login from './Login.jsx'
import Dash from './Dash.jsx'
import Addstudent from './Addstudent.jsx'
import Addattendance from './Addattendance.jsx'
import AddMarks from './Addmarks.jsx'
import Detail from './Detail.jsx'


function Menu(){
  return <div className="outer">
    <NavLink to ="/registration"><button>Register</button></NavLink>
    <NavLink to ="/login"><button>Login</button></NavLink>

  </div>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dash" element={<Dash/>}/>
      <Route path="/student" element={<Addstudent/>}/>
      <Route path="/addattendance" element={<Addattendance/>}/>
      <Route path="/addmarks" element={<AddMarks/>}/>
      <Route path="/detail" element={<Detail/>}/>
    
      
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
