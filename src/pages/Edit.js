import  Axios  from 'axios';
import React from 'react';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function Edit() {
    const navigate = useNavigate();
    const [count, setcount] = useState(0);
    const [name, setname] = useState("");
    const [release, setrelease] = useState("");
    const [genre, setgenre] = useState("");
    const [lang, setlang] = useState("");
    const [movieimage, setmovieimage] = useState("");
    const [cast, setcast] = useState("");
    const [cost, setcost] = useState(0);
    useEffect(() => {
      
        Axios.get("http://localhost:3001/moviedetail").then((result)=>{
            var len = result.data.length
            
        })
      
    }, []);
    
    const clickhandle = () =>{
        Axios.post("http://localhost:3001/movieinsert",{
            name : name,
            release : release,
            genre : genre,
            cast : cast,

        }).then((res)=>{

        })
        Axios.post("http://localhost:3001/langinsert",{
            lang : lang,
            mov : name

        }).then((res)=>{

        })

        Axios.put("http://localhost:3001/screening",{
            screenid: localStorage.getItem("screen"),
            email: localStorage.getItem("Adminemail"),
            mov : name,
            image : movieimage,
            
            cost : cost,

        }).then((result)=>{

        })
        window.alert("The movie has been updated");
        navigate("/Adminloggedin")



    }
    
    
  return (
    <div className="App">
    <div className="stt1">
        <div className="formhead"><b>Enter the Following details</b></div>
        <form onSubmit={clickhandle}>
                <input className="em" type="text" onChange={(e)=>setname(e.target.value)} placeholder="Name of the movie" />     <br/>
                <input className="pass" type="text" onChange={(e)=>setrelease(e.target.value)} placeholder="Release date"/><br/>
                <input className="em" type="text" onChange={(e)=>setgenre(e.target.value)} placeholder="genre of the movie" /><br/>
                <input className="em" type="text" onChange={(e)=>setlang(e.target.value)} placeholder="language" /><br/>
                <input className="em" type="text" onChange={(e)=>setmovieimage(e.target.value)} placeholder="movie image url" /><br/>
                <input className="em" type="text" onChange={(e)=>setcast(e.target.value)} placeholder="The cast of the movie" /><br/>
                <input className="em" type="number" onChange={(e)=>setcost(e.target.value)} placeholder="cost" /><br/>
                <input className="sub" type="submit" value="submit"/>
        </form>
        
    </div>
        
    </div>
  )
}

export default Edit;
