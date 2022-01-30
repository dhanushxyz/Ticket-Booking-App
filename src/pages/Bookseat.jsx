import React from 'react'
import '../cssfiles/homepage.css'
import { useState,useEffect } from 'react';
import Axios from 'axios'
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import axios from 'axios';
function Bookseat() {
    
    
    const navigate = useNavigate();
    const [count, setcount] = useState(0);
    const [total, settotal] = useState(0);
    const [mov, setmov] = useState("null")
    const [list, setlist] = useState([]);
    const [glist, setglist] = useState("");
    const [len, setlen] = useState(0);
    const [array, setarray] = useState([]);
    const [ulist, setulist] = useState([]);
    const [movie1, setmovie1] = useState("");
    const [movie2, setmovie2] = useState("");
    const [movie3, setmovie3] = useState("");
    const [cost1, setcost1] = useState(0);
    const [cost2, setcost2] = useState(0);
    const [cost3, setcost3] = useState(0);
    const [isexits, setisexits] = useState(0);
    const [date, setdate] = useState("");
    const [movname, setmovname] = useState("");
    useEffect(() => {
      
        Axios.get('http://localhost:3001/moviescreen').then((res)=>{
            setmovie1(res.data[0].movie_name);
            setmovie2(res.data[1].movie_name);
            setmovie3(res.data[2].movie_name);
            setcost1(res.data[0].cost)
            setcost2(res.data[1].cost)
            setcost3(res.data[2].cost)
            
            
        })
        var date1 = localStorage.getItem("date")
        setdate(date1)
        
      
    }, []);
    
    
    
    var handleclick = (e) =>{
        
        
        if( mov === "null"){
            window.alert("please choose a movie")
            
        }
        else if(e.target.className ==="seat"){
            e.target.className = "seat-selected";
            setcount(count+1);
            settotal(mov*(count+1));
            setlist([...list,e.target.id])
            setulist([...ulist,e.target.id])
            
            
        }
        else if(e.target.className ==="seat-selected") {
            e.target.className ="seat" ; 
            setcount(count-1);
            settotal(mov*(count-1));
            var array =[...list]
            var index = array.indexOf(e.target.id)
            array.splice(index,1)
            setlist(array)

            var array1 =[...ulist]
            var index1 = array1.indexOf(e.target.id)
            array1.splice(index1,1)
            setulist(array1)
        }
        
        
    }
    var handlechanging = (e)=>
    {
    setmovname(e.target.value); 
    
    if(e.target.value == movie1){
        setmov(cost1)
    }
    else if(e.target.value == movie2){
        setmov(cost2)
    }
    else{
        setmov(cost3)
    }
    if(count>0){
        settotal(count*mov)
    }
    
}

    
    var proceed = ()=>{
       

        if(count!=0){
            
            if(isexits === 0){
                axios.post("http://localhost:3001/demo1",{
                a : list.toString(),
                date : date,
                movie_name : movname
                
            })
            
            }
            else if(isexits == 1){
                console.log(list)
                axios.put("http://localhost:3001/demo2",{
                    a : list.toString(),
                    date : date,
                    movie_name : movname
                    
                }).then((res)=>{

                })
            }
            
            navigate('/Payment')
        }
        else{
            window.alert("please select a seat")
        }
    }

        useEffect((e) => {
            
            
            var date = localStorage.getItem("date")
            Axios.post("http://localhost:3001/demo",{
                movie : movname,
                date : date
            }).then(result=>{
                
                if(result.data.message){
                    setisexits(0)
                    setarray([]);
                    setlist([]);
                    
                    
                }
            
            else{ 
            setglist(result.data[0].seatsoccupied) 
            var arr1 = result.data[0].seatsoccupied.split(',');
            setarray(arr1);
            setlist(arr1);
            setlen(result.data.length)
            setisexits(1)
            }
            
            
        })
            
          },[movname]);
    
    
    localStorage.setItem("count",count)
    localStorage.setItem("moviename",movname)
    localStorage.setItem("cost",total)
    var seatsbooked = ulist.toString();
    localStorage.setItem("seatsbooked",seatsbooked)
    

    
    
    return (
        <div>
            <div id="cool" className="movie-container">
            <div className='textc'><h1>Pick a movie:</h1></div>
            <div className='selectionmov'>
                <select id="movie" onChange={handlechanging}>
                    <option value="null">Click here to select a movie</option>
                    <option  value={movie1}>{movie1} cost:{cost1}</option>
                    <option  value={movie2}>{movie2} cost:{cost2}</option>
                    <option  value={movie3}>{movie3} cost:{cost3}</option>
                </select>
            </div>
            
            </div>

            <ul className="showcase">
            <li>
                <div className="seat"></div>
                <small>N/A</small>
            </li>

            <li>
                <div className="seat-selected"></div>
                <small>Selected</small>
            </li>

            <li>
                <div className="seat-occupied"></div>
                <small>Occupied</small>
            </li>
            </ul>

            <div className="container">
            <div className="screen"></div>
            <div className="placement">
            <div className="row">
                <div id='1' onClick={handleclick} className={array.includes("1") ? "seat-occupied" : "seat"}>1</div>
                <div id='2' onClick={handleclick} className={array.includes("2") ? "seat-occupied" : "seat"}>2</div>
                <div id='3' onClick={handleclick} className={array.includes("3") ? "seat-occupied" : "seat"}>3</div>
                <div id='4' onClick={handleclick} className={array.includes("4") ? "seat-occupied" : "seat"}>4</div>
                <div id='5' onClick={handleclick} className={array.includes("5") ? "seat-occupied" : "seat"}>5</div>
                <div id='6' onClick={handleclick} className={array.includes("6") ? "seat-occupied" : "seat"}>6</div>
                <div id='7' onClick={handleclick} className={array.includes("7") ? "seat-occupied" : "seat"}>7</div>
                <div id='8' onClick={handleclick} className={array.includes("8") ? "seat-occupied" : "seat"}>8</div>
            </div>
            <div className="row">
                <div id='9' onClick={handleclick} className={array.includes("9") ? "seat-occupied" : "seat"}>9</div>
                <div id='10' onClick={handleclick} className={array.includes("10") ? "seat-occupied" : "seat"}>10</div>
                <div id='11' onClick={handleclick} className={array.includes("11") ? "seat-occupied" : "seat"}>11</div>
                <div id='12' onClick={handleclick} className={array.includes("12") ? "seat-occupied" : "seat"}>12</div>
                <div id='13' onClick={handleclick} className={array.includes("13") ? "seat-occupied" : "seat"}>13</div>
                <div id='14' onClick={handleclick} className={array.includes("14") ? "seat-occupied" : "seat"}>14</div>
                <div id='15' onClick={handleclick} className={array.includes("15") ? "seat-occupied" : "seat"}>15</div>
                <div id='16' onClick={handleclick} className={array.includes("16") ? "seat-occupied" : "seat"}>16</div>
            </div>

            <div className="row">
                <div id='17' onClick={handleclick} className={array.includes("17") ? "seat-occupied" : "seat"}>17</div>
                <div id='18' onClick={handleclick} className={array.includes("18") ? "seat-occupied" : "seat"}>18</div>
                <div id='19' onClick={handleclick} className={array.includes("19") ? "seat-occupied" : "seat"}>19</div>
                <div id='20' onClick={handleclick} className={array.includes("20") ? "seat-occupied" : "seat"}>20</div>
                <div id='21' onClick={handleclick} className={array.includes("21") ? "seat-occupied" : "seat"}>21</div>
                <div id='22' onClick={handleclick} className={array.includes("22") ? "seat-occupied" : "seat"}>22</div>
                <div id='23' onClick={handleclick} className={array.includes("23") ? "seat-occupied" : "seat"}>23</div>
                <div id='24' onClick={handleclick} className={array.includes("24") ? "seat-occupied" : "seat"}>24</div>
            </div>

            <div className="row">
                <div id='25' onClick={handleclick} className={array.includes("25") ? "seat-occupied" : "seat"}>25</div>
                <div id='26' onClick={handleclick} className={array.includes("26") ? "seat-occupied" : "seat"}>26</div>
                <div id='27' onClick={handleclick} className={array.includes("27") ? "seat-occupied" : "seat"}>27</div>
                <div id='28' onClick={handleclick} className={array.includes("28") ? "seat-occupied" : "seat"}>28</div>
                <div id='29' onClick={handleclick} className={array.includes("29") ? "seat-occupied" : "seat"}>29</div>
                <div id='30' onClick={handleclick} className={array.includes("30") ? "seat-occupied" : "seat"}>30</div>
                <div id='31' onClick={handleclick} className={array.includes("31") ? "seat-occupied" : "seat"}>31</div>
                <div id='32' onClick={handleclick} className={array.includes("32") ? "seat-occupied" : "seat"}>32</div>
            </div>

            <div className="row">
                <div id='33' onClick={handleclick} className={array.includes("33") ? "seat-occupied" : "seat"}>33</div>
                <div id='34' onClick={handleclick} className={array.includes("34") ? "seat-occupied" : "seat"}>34</div>
                <div id='35' onClick={handleclick} className={array.includes("35") ? "seat-occupied" : "seat"}>35</div>
                <div id='36' onClick={handleclick} className={array.includes("36") ? "seat-occupied" : "seat"}>36</div>
                <div id='37' onClick={handleclick} className={array.includes("37") ? "seat-occupied" : "seat"}>37</div>
                <div id='38' onClick={handleclick} className={array.includes("38") ? "seat-occupied" : "seat"}>38</div>
                <div id='39' onClick={handleclick} className={array.includes("39") ? "seat-occupied" : "seat"}>39</div>
                <div id='40' onClick={handleclick} className={array.includes("40") ? "seat-occupied" : "seat"}>40</div>
            </div>

            <div className="row">
                <div id='41' onClick={handleclick} className="seat-occupied">41</div>
                <div id='42' onClick={handleclick} className={array.includes("42") ? "seat-occupied" : "seat"}>42</div>
                <div id='43' onClick={handleclick} className={array.includes("43") ? "seat-occupied" : "seat"}>43</div>
                <div id='44' onClick={handleclick} className={array.includes("44") ? "seat-occupied" : "seat"}>44</div>
                <div id='45' onClick={handleclick} className={array.includes("45") ? "seat-occupied" : "seat"}>45</div>
                <div id='46' onClick={handleclick} className={array.includes("46") ? "seat-occupied" : "seat"}>46</div>
                <div id='47' onClick={handleclick} className={array.includes("47") ? "seat-occupied" : "seat"}>47</div>
                <div id='48' onClick={handleclick} className="seat-occupied">48</div>
            </div>

            </div>
            

            </div>

            <p className="text">
            You have selected <span>{count}</span> seats for a price of Rs <span>{total}</span>
            </p> 
            <div className='center'>
                <button onClick={proceed} className='gotopay'>Proceed to payment</button>
                 
            </div>
            
        </div>
    )
    
     
}

export default Bookseat
