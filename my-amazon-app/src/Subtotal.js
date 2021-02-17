import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketSubtotal } from './reducer'
import {useHistory} from 'react-router-dom'

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue()

    console.log("basket:", basket)
    const total = ()=>{
        var sum = 0;
        for (var i of basket){
            console.log(`object`, i.price)
            sum = sum + i.price
            console.log('total in for loop:',sum)
            
        }
        return sum
        // basket.map((object,i)=>{
        // console.log(`object${i}`, object.price)
        
        // sum = sum + object.price
        // console.log('total:',sum)
        // // return sum
    // })
    // return sum
    }
    

    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value)=>(

                <>
                <p>
                    Subtotal ({basket?.length} items):
                    <strong>{value}</strong>
                </p>
                <small>
                    <input type="checkbox"/> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketSubtotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button onClick={e=> history.push('/payment')}>Proceed to Checkout</button>
        </div>
        
    )
}
 
export default Subtotal
