import { wait } from '@testing-library/user-event/dist/utils'
import React from 'react'
import "../cssfiles/payment.css"
import { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import  Axios  from 'axios';
function Payment() {
    const [count, setcount] = useState(0);
    useEffect(() => {
      Axios.get("http://localhost:3001/booking").then((res)=>{
          var len = res.data.length
          setcount(parseInt(res.data[len-1].booking_id) + 1)
      })
    }, []);
    
    

    
    const navigate = useNavigate();
    const paid = (e)=> {

        const nooftic = localStorage.getItem("count");
    
        const totalcost = localStorage.getItem("cost");
    
        const date = localStorage.getItem("date")
    
        const moviename = localStorage.getItem("moviename")
    
        const email = localStorage.getItem("email")
        
        const selseats = localStorage.getItem("seatsbooked")
        Axios.post("http://localhost:3001/paid",{
            total : totalcost,
            date : date,
            movname : moviename,
            email : email,
            nooftickets : nooftic,
            id : count,
            seatssel : selseats


        })
        window.alert("payment done")
        wait(1);
        navigate('/');
    }

    
    return (
        <div className='payment'>
           <div className="checkout">
               <h1>Checkout</h1>
               <form onSubmit={paid} className='newform'>
                   <input minLength="2" type="text" placeholder='Card'/> 
                   <input minLength="2" type="text" placeholder='Name on card'/>
                   <div className="half">
                    <input minLength="2" type="text" placeholder='MM-YY'/>
                    <input minLength="3" type="text" placeholder='CVV'/>
                   </div>
                   <button type='submit'>Pay now</button>
                   
                   
               </form>
           </div>
  
        </div>
    )
}

export default Payment
