import  Axios  from 'axios';
import React from 'react'
import { useEffect, useState } from 'react/cjs/react.production.min'

function Userdetails() {
    const [nam, setnam] = useState("");
    const [data, setdata] = useState([]);
    setnam(localStorage.getItem("name"))
    useEffect(() => {
        Axios.get("http://localhost:3001/use").then((res)=>{
            setdata(res.data)
        })  
    }, []);
    return (
        
        
        
        <div>
            
        </div>
    )
}

export default Userdetails
