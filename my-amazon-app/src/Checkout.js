import React, {forwardRef} from 'react'
import FlipMove from 'react-flip-move';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue()

    return (
        <div className="checkout">
            
            <div className="checkout__left">
            <h3>Hello, {user?`${user.email}`:''}</h3>
                {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="Image" /> */}
            
                <div className="checkout__title">
                    <h1>Your Shoping Cart</h1>
                <FlipMove>
                {basket.map((item,i)=>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
                </FlipMove>
                {/* {checkoutproduct} */}
                </div>
            </div>
            <div className="Checkout__right">
                <Subtotal/>
                
            </div>

        </div>
    )
}

export default Checkout
