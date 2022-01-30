
import React from 'react';
import { Link } from 'react-router-dom';
import '../cssfiles/adminloggedin.css'
function Adminloggedin() {
  
  return(
      <div className="Admloggedin">
          <div>
              <h1>Welcome admin</h1>
              <p className="text">What would you like to do?</p>

          </div>
          <div className='cen'>
            <Link to="/Remove"><button className="deleteuser">Remove a user</button></Link><br></br>
            <Link to="/Editscreen"><button className="edit">Edit the movie being casted</button></Link><br></br>
            <Link to="/Show"><button className="edit">Show all the booking details</button></Link>
          </div>
          
      </div>
  )


    
}

export default Adminloggedin;
