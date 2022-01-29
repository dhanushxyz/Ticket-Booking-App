import React from 'react'
import "../cssfiles/date.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Seldate() {
    const [date, setdate] = useState("");
    const navigate = useNavigate();
    const handler1 = () =>{
        if(date === ""){
            window.alert("select a date")
        }
        else{
        localStorage.setItem("date",date)
        navigate('/Bookseat')
        }
    }
    return (
        <div className='date'>
            <h2>Select a date for your Movie</h2>
            <input className='inp' type='date' min="2022-02-01" onChange={(e)=>{setdate(e.target.value)}}></input><br></br>
            <button className='but' onClick={handler1}>Select movie and seats</button>
        </div>
    )
}

export default Seldate
