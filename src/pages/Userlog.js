import React from 'react'
import { Link } from 'react-router-dom';
import '../cssfiles/logged.css'
function Userlog() {
    var loggedinuser = localStorage.getItem("name");
    return (
        <div className='middle'>
            <h1>Welcome {loggedinuser}</h1>
            <h1>choose one of the following!!!</h1>
            <Link to="/Seldate"><div className="Book"><h1>Book Tickets</h1></div></Link>
            <Link to="/Userdetails"><div className='show-details'><h1>Show user details</h1></div></Link>
            
        </div>
    )
}

export default Userlog
