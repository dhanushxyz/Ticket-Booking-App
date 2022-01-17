import React from 'react'
import '../cssfiles/homepage.css'
import { useState } from 'react';
import { Container } from 'reactstrap';


function Home() {
    const [count, setcount] = useState(0);
    const [total, settotal] = useState(0);
    var handleclick = (e) =>{
        if(e.target.classNameList = "seat"){
            e.target.className = "seat selected"
            setcount(count+1);
        }
        
    }
    
    return (
        <div>
            <div id="cool" className="movie-container">
            <div className='textc'><h1>Pick a movie:</h1></div>
            <div className='selectionmov'>
                <select id="movie">
                    <option value="10">Avengers: Endgame ($10)</option>
                    <option value="12">Joker ($12)</option>
                    <option value="8">Toy Story 4 ($8)</option>
                    <option value="9">The Lion King ($9)</option>
                </select>
            </div>
            
            </div>

            <ul className="showcase">
            <li>
                <div className="seat"></div>
                <small>N/A</small>
            </li>

            <li>
                <div className="seat selected"></div>
                <small>Selected</small>
            </li>

            <li>
                <div className="seat occupied"></div>
                <small>Occupied</small>
            </li>
            </ul>

            <div className="container">
            <div className="screen"></div>
            <div className="placement">
            <div className="row">
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
            </div>
            <div className="row">
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
            </div>

            <div className="row">
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
            </div>

            <div className="row">
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
            </div>

            <div className="row">
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
            </div>

            <div className="row">
                <div onClick={handleclick} className="seat occupied"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat"></div>
                <div onClick={handleclick} className="seat occupied"></div>
            </div>

            </div>
            

            </div>

            <p className="text">
            You have selected <span>{count}</span> seats for a price of $<span>{total}</span>
            </p> 
    
        </div>
    )
}

export default Home
