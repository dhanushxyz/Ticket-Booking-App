import React from 'react'
import '../cssfiles/homepage.css'
import { useState,useEffect } from 'react';
import { Container } from 'reactstrap';
import "../cssfiles/home1.css"
import Axios from 'axios'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


function Home() {
    
    
    const [detail, setdetail] = useState([]);
    useEffect(() => {
      
        Axios.get("http://localhost:3001/Movie").then(res =>{

            setdetail(res.data);
            
            
            
        })
      
      
    }, []);
    
    
    
    return (
        <div>
            <div className="imgcontain">
                    {detail.map((val,key)=>{
                        return(
                        <div className="imgcon" key={key}>
                        <img src={val.posterurl} height="400px" width="200px"/>
                        <h3>{val.movname}</h3>
                        <h5>Hero:{val.actors}</h5>
                        <h5>Director:{val.director}</h5>
                        </div>
                        )
                        
                    })}
                
            </div>
            <div className='referlogin'>
                <Link to="/Login"><button className='butlog'><b>Click here to book tickets</b></button></Link>
            </div>
           
            
    
        </div>
    )
}

export default Home
