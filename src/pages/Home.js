import React from 'react'
import '../cssfiles/homepage.css'
import { useState } from 'react';
import { Container } from 'reactstrap';
import "../cssfiles/home1.css"

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


function Home() {
    
    
    
    return (
        <div>
            <div className="imgcontain">
                    <div className="imgcon">
                    <img src='https://i.pinimg.com/736x/81/85/2e/81852e08760ba5c5ebcd071c1eacc995--spiderman-movie-amazing-spiderman.jpg' height="400px" width="200px"/>
                    <h3>Amazing man</h3>
                    <h5>Hero:</h5>
                    <h5>Director:</h5>

                </div>
                <div className="imgcon">
                    <img src='https://i.pinimg.com/736x/81/85/2e/81852e08760ba5c5ebcd071c1eacc995--spiderman-movie-amazing-spiderman.jpg' height="400px" width="200px"/>
                    <h3>Amazing man</h3>
                    <h5>Hero:</h5>
                    <h5>Director:</h5>

                </div>
                <div className="imgcon">
                    <img src='https://i.pinimg.com/736x/81/85/2e/81852e08760ba5c5ebcd071c1eacc995--spiderman-movie-amazing-spiderman.jpg' height="400px" width="200px"/>
                    <h3>Amazing man</h3>
                    <h5>Hero:</h5>
                    <h5>Director:</h5>

                </div>
            </div>
            <div className='referlogin'>
                <Link to="/Login"><h1>Click here to book tickets</h1></Link>
            </div>
           
            
    
        </div>
    )
}

export default Home
