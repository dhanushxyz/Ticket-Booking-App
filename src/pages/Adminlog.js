import axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios  from 'axios'
import '../cssfiles/genral.css'
function Adminlog() {
    const navigate = useNavigate();

    const [emailAdm, setemailAdm] = useState("");
    const [usernameAdm, setusernameAdm] = useState("");
    const [passwordAdm, setpasswordAdm] = useState("");
    const clickhandler = (e) =>{
        
        Axios.post("http://localhost:3001/Alogin",{
            e:emailAdm,
            u: usernameAdm,
            p: passwordAdm,
        }).then((response) => {
            if(response.data.message){
                window.alert("Enter valid details")
            }
            else{
                localStorage.setItem("Admname",response.data[0].admin_username)
                window.alert("login sucessful")
                navigate("/Adminloggedin")
            }
            
        })
        
        e.preventDefault()
        
    }
  return (
  <div>
     <div className="App">
            <div className="st">
                <div className="formhea"><b>Admin login</b></div>
                <form onSubmit={clickhandler}>
                        <input className="e" type="text" onChange={(e)=>{setemailAdm(e.target.value);}} placeholder="Email"/><br/>
                        <input className="p" type="password" onChange={(e)=>{setpasswordAdm(e.target.value);}} placeholder="Password"/><br/>
                        <input className="su" type="submit" value="submit"/>
                </form>
                <div className='sihea'>If you want to log in as a user</div>
                <Link to="/login"><button className='sibutto'>login</button></Link>
            </div>
                
            </div>

  </div>
  )
}

export default Adminlog;

