import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const signIn = e =>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth=>{
            history.push('/')
        })
        .catch(error=> alert(error.massage))
        // some fancy firbase login...
    }

    const register = e =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            // it successfully created a new user with email and paaword.
            console.log(auth)
            if(auth){
                history.push('/')
            }
        })
        .catch(error =>{
            alert(error.massage)
        })

        // some fancy firbase login...
    }
    return (
        <div className='login'>
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" />
            </Link>
            <div className='login__container'>
                <h1>Sign-In</h1>
                <form>
                
                        <h5>Email</h5>
                        <input type='email' value = {email} onChange = {e=> setEmail(e.target.value)}placeholder='Enter your email' />
                    
                
                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e=> setPassword(e.target.value)} placeholder='Enter your Password' />
                    
                    <button type="submit" onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's 
                    Conditions of use & Sale. Please see 
                    our Privacy Notice, our Cookiies Notics 
                    and our Interest-Based Ads
                </p>
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
