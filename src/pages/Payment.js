import { wait } from '@testing-library/user-event/dist/utils'
import React from 'react'
import "../cssfiles/payment.css"
import { useNavigate } from 'react-router-dom';
function Payment() {
    const navigate = useNavigate();
    const paid = ()=> {
        window.alert("payment done")
        wait(1);
        navigate('/');
        
    }
    return (
        <div className='payment'>
           <div className="checkout">
               <h1>Checkout</h1>
               <form onSubmit={paid} className='newform'>
                   <input type="text" placeholder='Card'/> 
                   <input type="text" placeholder='Name on card'/>
                   <div className="half">
                    <input type="text" placeholder='MM-YY'/>
                    <input type="text" placeholder='CVV'/>
                   </div>
                   <button type='submit'>Pay now</button>
                   
                   
               </form>
           </div>
  
        </div>
    )
}

export default Payment
