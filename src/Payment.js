import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider';
import {useStripe, useElements, CardElement} from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { useHistory } from "react-router-dom";

function Payment() {

    const [{basket,user},dispatch]= useStateValue();

const history = useHistory();


    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
       
        const getClientSecret = async () =>{
      const response = await axios ({
    method: 'post',

    //stripe wants somethimg in currency submits
    url: `/payments/create?total=${getBasketTotal(basket) * 65}`

})
setClientSecret(response.data.clientSecret)
      
}
getBasketTotal();
    }, [basket])
    

    const handleSubmit = async (event) => {
  
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then (({paymentIntent})  => {
            //paymentIntent = payment confirmation

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            history.replaceState('/orders')
        })
    }
    const handleChange = event => {
setDisabled(event.empty);
setError(event.error ? event.error.message : "");
    }
  return (
    <div className='payment'>
      <div className="payment__container">
        <h1>
            Checkout (<Link to ="/checkout">{basket?.length}items</Link>)
        </h1>
{/* delivery adress */}
<div className="payment__section">
<div className="payment__title">
    <h3>Delivery Address </h3>
</div>
<div className="payment__address">
    <p>{user?.email}</p>
    <p>128 Princess Highway, Hallam</p>
    <p>Victoria, 3803</p>

</div>

</div>

{/* review items  */}
<div className="payment__section">
<div className="payment__title">
    <h3>Review items and delivery </h3>
</div>
    <div className="payment__items">
        {basket.map(item => (
            <CheckoutProduct
            id= {item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
        ))}
    </div>
</div>

{/* payment method  */}
<div className="payment__section">
<div className="payment__title">
    <h3>Payment Method </h3>
</div>
<div className="payment__details">
<form onSubmit={handleSubmit}>
<CardElement onChange={handleChange}/>
<div className="payment__priceContainer">
<CurrencyFormat
        renderText={(value) =>(
    
           <h3>Order Total: {value}</h3>
            
                
        )}
        decimalScale ={2}
        value ={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator = {true}
        prefix= {"$"}
         />
        <button disabled={processing || disabled || succeeded }>
            <span>{processing ? <p>Processing</p> :  "Buy Now"}</span>
    
    </button>
</div>
{error && <div>
  {error}  </div>}

</form>
</div>
</div>


      </div>
    </div>
  )
}

export default Payment
