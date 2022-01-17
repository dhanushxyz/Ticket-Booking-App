import React from 'react'
import Axios  from 'axios'
import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import '../cssfiles/Login.css'

function Login() {
    const [urernameLog , setusernameLog] = useState('');
    const [passwordLog, setpasswordLog] = useState('');
    const clickhandler = () =>{
        Axios.post()
    }
    return (
        <>
        <div className="App">
            <div className="stt">
                <div className="formhead"><b>Login</b></div>
                <form onSubmit={clickhandler}>
                        <input className="un" type="text" onChange={(e)=>{setusernameLog(e.target.value);}} placeholder="Username" />     <br/>
                        <input className="pass" type="password" onChange={(e)=>{setpasswordLog(e.target.value);}} placeholder="Password" /><br/>
                        <input className="sub" type="submit" value="submit"/>
                </form>
                <div className='sihead'>If you dont have an account Sign in here</div>
                <button className='sibutton'><Link to="/Signup">Sign up</Link></button>
            </div>
                
            </div>
            


        </>
        
    )
}

export default Login
