import React from 'react';
import { useNavigate } from 'react-router-dom';

function Editscreen() {
    const navigate = useNavigate();
    const handleclick=()=>{
        localStorage.setItem("screen",1);
        navigate("/Edit")
        
    }
    const handleclick1=()=>{
        localStorage.setItem("screen",2)
        navigate("/Edit")
    }
    const handleclick2=()=>{
        localStorage.setItem("screen",3)
        navigate("/Edit")
    }
  return (
    <div className='cen1'>
        <h1>
            Select the Screen in which u want the movie in
        </h1>
            <button onClick={handleclick} className="deleteuser">Screen 1</button><br></br>
            <button onClick={handleclick1} className="edit">Screen 2</button><br></br>
            <button onClick={handleclick2} className="edit">Screen 3</button>
    </div>
  )


}

export default Editscreen;
