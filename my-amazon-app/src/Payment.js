import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from "react-currency-format"
import StripeCheckoutButton from "react-stripe-checkout"
import { getBasketSubtotal } from './reducer'
import axios from './axios'
import { db } from './firebase'


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory()

    localStorage["basket"]= JSON.stringify(basket)
    // const order = {
    //     localStorage.set("basket", stringify(basket))
    // }
    const stripe = useStripe();
    const elements = useElements()

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)


    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)


    useEffect(() => {
        // generate the special secreat which allows us to charge the customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'POST',
                //styripe expects the total in a currency subunits
                url: `/payments/create?total=${getBasketSubtotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket]);

    console.log("The SECRET IS >>>", clientSecret)
    console.log("Person:", user)

    const handleSubmit = async (event) => {
        //do all the fancy stripe stuff..
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation
            console.log("paymentIntent:", paymentIntent)
            
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
            setSucceeded(true)
            setError(null)
            setProcessing(false)

            history.replace('/orders')
            dispatch({
                type: "EMPTY_BASKET"
            })
        })
        // .catch(error =>{
        //     setError(`Payment failed ${error.message}`);
        //     setProcessing(false);
        // })

    }

    const handleChange = event => {
        //Listen for changes in the CardElement
        //and display any errors as the customer types their card details

        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }


    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(<Link to="/checkout">{basket?.length} item </Link>)
                </h1>
                {/* {Payment section - delivery address} */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Lucknow,226022</p>
                        <p>UttarPradesh</p>
                    </div>
                </div>

                {/* {Payment section - Reveiw the item} */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Reveiw items and delivary</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* {Payment section - Payment method} */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">
                        {/* {Strip method} */}
                        
                        <form onSubmit={handleSubmit}>
                        
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (

                                        <h3>Order Total:{value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketSubtotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled ||
                                    succeeded}>
                                    <span>{processing ? <p>Processng</p> : "Buy Now"}</span>
                                </button> 
                                {/* {Erorr} */}
                                {error && <div>{error}</div>}
                            </div> 
                        </form>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Payment
