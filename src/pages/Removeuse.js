import React from 'react';
import { useState } from 'react';
import Axios from 'axios'
import '../cssfiles/remove.css'
function Removeuse() {
    const [email, setemail] = useState("");

    const handleclick = (e)=>{
        Axios.post("http://localhost:3001/remove",{
            e: email,
            })
        if(email == null)        
        window.alert("Removed the user with the email you provided")
        
        else{
            window.alert("Provide proper email")
        }
                

            
    }
  return(
      <div className='st1'>
          <h2>Enter the email of the user that you want to remove</h2>
          <input className="e" type="text" onChange={(e)=>setemail(e.target.value)} placeholder="email" /><br></br>
          <button onClick={handleclick}>Remove</button>
      </div>
  )
}

export default Removeuse;
