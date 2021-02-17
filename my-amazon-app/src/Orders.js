import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Orders.css'
import { useStateValue } from './StateProvider';

function Orders() {

    // const [{ basket, user }, dispatch] = useStateValue();
    
    const basket1 = localStorage.getItem('basket')
    console.log("basket1:",basket1)
    const basket = JSON.parse(basket1)
    console.log("basket:",basket)

    // dispatch({
    //             type: "EMPTY_BASKET"
    //         })
    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Ordered items</h3>
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
        </div>
    )
}

export default Orders
