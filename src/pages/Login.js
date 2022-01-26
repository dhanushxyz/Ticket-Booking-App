import React from 'react'
import Axios  from 'axios'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../cssfiles/Login.css'
import Seldate from './Seldate';

function Login() {
    const navigate = useNavigate();
    const [urernameLog , setusernameLog] = useState('');
    const [passwordLog, setpasswordLog] = useState('');
    const [emailLog, setemailLog] = useState("");
    
    const clickhandler = (e) =>{
        
        Axios.post("http://localhost:3001/login",{
            e: emailLog,
            p: passwordLog,
        }).then((response) => {
            if(response.data.message){
                window.alert("Enter valid details")
            }
            else{
                localStorage.setItem("name",response.data[0].login_username)
                window.alert("login sucessful")
                navigate("/Userlog")
            }
            
        })
        
        e.preventDefault()
        
    }
    return (
        <>
        <div className="App">
            <div className="stt">
                <div className="formhead"><b>Login</b></div>
                <form onSubmit={clickhandler}>
                        <input className="em" type="text" onChange={(e)=>setemailLog(e.target.value)} placeholder="email" />     <br/>
                        <input className="pass" type="password" onChange={(e)=>setpasswordLog(e.target.value)} placeholder="Password" /><br/>
                        <input className="sub" type="submit" value="submit"/>
                </form>
                <div className='sihead'>If you Want to log in as a admin click below</div>
                <button className='sibutton'><Link to="/Adminlog">Admin Login</Link></button>
            </div>
                
            </div>
            


        </>
        
    )
    
    
}

export default Login
