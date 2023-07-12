import React, { Component } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../firebase/firebase"
import {Navigate} from 'react-router-dom'

export class Login extends Component {
    state = {
        email: '',
        password: '',
        redirect: false
    }
    signUp = async(e)=>{
        e.preventDefault()
        this.setState({redirect: true})
        createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userCridential)=>{
            const user = userCridential
            console.log(user, "user logged in");

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
    }
    getUser(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]: value})
    }
  render() {
    return (
        <div className='login'>
        {this.state.redirect && <Navigate to={'/login'}/>}
        <form action=""className="login-wrapper" method="get">
            <div className="input-wrapper">
                <input onChange={(e) => {this.getUser(e)}} type="email" placeholder='Email' name="email" id="email" />
                <input onChange={(e) => {this.getUser(e)}} type="password" placeholder='Password' name="password" id="password" />
            </div>
            <div className="button-wrapper">
                <button type="submit" className="login-btn">Login</button>
                <button type="submit" onClick={this.signUp} className="signup-btn">Sign Up</button>
            </div>
        </form>
    </div>
    )
  }
}


export default Login