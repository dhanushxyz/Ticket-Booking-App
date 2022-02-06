import React from 'react';
import Axios from 'axios';
import { useState ,useEffect } from 'react';


function Show() {
    const [data, setdata] = useState([]);
    
    Axios.get('http://localhost:3001/booking').then((result)=>{
            setdata(result.data)
        })
    
    console.log(data)
  return(
      <div>
          {data.map((val,key)=>{
                    return(
                        <div className='container1'>
                            <div>
                            <div className='center'>
                                <h3>Ticket id : {val.booking_id}</h3>
                            </div>
                            <div className='det'>
                                No of tickets : {val.no_of_tickets}
                            </div>
                            <div className='det'>
                                Cost: {val.cost}
                            </div>
                            <div className='det'>
                                Movie name : {val.movie_name}
                            </div>
                            <div className='det'>
                                date booked : {val.booked_date}
                            </div>
                            <div className='det'>
                                date booked : {val.seatsselected}
                            </div>
                            </div>
                        </div>
                    )
                })}
      </div>
  )
}

export default Show;
