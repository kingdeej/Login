import React, { Component } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from "../firebase/firebase"
import {Navigate, redirect} from 'react-router-dom'
import {FaGoogle} from 'react-icons/fa'

export class Login extends Component {
    state = {
        step: 1,
        email: '',
        password: '',
        redirect: false,
        alert: ''
    }
    provider = new GoogleAuthProvider()
    ButtonWrapper = ()=>{
        switch (this.state.step) {
            case 1:
                return <button type='submit' id='signup' className="signup-btn">Sign Up</button>
            case 2:
                return <button type='submit' id='signin' className="login-btn">Sign In</button>
            default:
                break;
        }
    }


    getUser(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]: value})
    }
    signIn = async (e)=>{
        e.preventDefault()
        await signInWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userCridential)=>{
            const user = userCridential.user
            this.setState({redirect: true})
            console.log(user);
        })
        .catch((error)=>{
            const errorCode = error.errorCode
            const errorMessage = error.errorMessage
            console.log(errorCode, errorMessage);
            this.setState({alert: 'Try again'})
        })
    }

    signUp = async(e)=>{
        e.preventDefault()
        await createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userCridential)=>{
            const user = userCridential.user
            this.setState({redirect: true})
            console.log(user, "user logged in");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }
    signUpGoogle = async (e)=>{
        e.preventDefault()
        await signInWithPopup(auth, this.provider)
            .then((userCridential)=>{
                // const cridential = GoogleAuthProvider.cridentialFromResults(userCridential);
                // const token = cridential.accessToken;
                const user = userCridential.user
                this.setState({redirect: true})
                console.log(user, "user logged in");
                // console.log(token);

            })
            .catch((error)=>{
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage);
            })
    }
  render() {
    return (
        <div className='login'>
        {this.state.redirect && <Navigate to={'/'}/>}
        <form onSubmit={this.state.step === 1 ? this.signUp : this.signIn} className="login-wrapper" method="get">
            <div className="input-wrapper">
            {<h3>{this.state.alert}</h3>}
                <input required onChange={(e) => {this.getUser(e)}} type="email" placeholder='Email' name="email" id="email" />
                <input required onChange={(e) => {this.getUser(e)}} type="password" placeholder='Password' name="password" id="password" />
            </div>
            <div className="button-wrapper">
                <this.ButtonWrapper />                
            {this.state.step === 1 && <button  onClick={() => { this.setState({step: 2}) }}>Already have an account ?</button>}
            {this.state.step === 2 && <button  onClick={() => { this.setState({step: 1}) }}>Back to Sign In</button>}
            </div>
            <button onClick={this.signUpGoogle}><FaGoogle /></button>
        </form>
    </div>
    )
  }
}


export default Login