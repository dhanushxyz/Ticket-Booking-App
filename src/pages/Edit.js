import  Axios  from 'axios';
import React from 'react';
import { useState ,useEffect} from 'react';
function Edit() {
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
            setcount(parseInt(result.data[len-1].movie_id) + 1 )
        })
      
    }, []);
    
    const clickhandle = () =>{
        Axios.post("http://localhost:3001/movieinsert",{
            name : name,
            release : release,
            genre : genre,
            id : count

        }).then((res)=>{

        })
        Axios.post("http://localhost:3001/langinsert",{
            lang : lang,
            mov : name

        }).then((res)=>{

        })


    }
    
    console.log(count)
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
