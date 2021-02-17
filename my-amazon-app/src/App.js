import React, { useEffect } from "react"
import Header from "./Header"
import './App.css';
import Home from "./Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from "./Checkout"
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from "./StateProvider";
import Payment from './Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders'

const promise = loadStripe(
  'pk_test_51I7ZySCRuEIFioynCZ4aTexmFgCwlQMvdhuVgV9sZpgxcHyR0X2ITVPcD14GlW68wRW4Ucc9hBf5JBeCf4kp7mlz008dL0kHD3'
)

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads..
    auth.onAuthStateChanged(authUser => {
      console.log('user is >>>', authUser)

      if (authUser) {
        // the user in logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe ={promise}>
                 <Payment/>
            </Elements>
            
            {/* <Checkout /> */}
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
