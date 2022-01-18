import React from 'react'
import "../cssfiles/date.css"
import { useNavigate } from 'react-router-dom';
function Seldate() {
    const navigate = useNavigate();
    const handler1 = () =>{
        navigate('/Bookseat')
    }
    return (
        <div className='date'>
            <h1>Select a date for your Movie</h1>
            <input type='date' min="2022-02-01"></input><br></br>
            <button onClick={handler1}>Select movie and seats</button>
        </div>
    )
}

export default Seldate
