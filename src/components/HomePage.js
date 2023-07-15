import {auth} from '../firebase/firebase'
import {getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import {Navigate, redirect} from 'react-router-dom'
import React, { Component } from 'react'

const auths = getAuth()
export class HomePage extends Component {
    state = {
        redirect: false
    }
    signOut(){
        console.log('signed out');
        signOut(auth)
    }

    render() {
        onAuthStateChanged(auths, (user)=>{
          if (user) {
              const uid = user.uid;
              console.log(uid);
          }
          else{
              this.setState({redirect: true})
          }
      })
        return (
        <div>
            <button onClick={this.signOut} className="signOut">SignOut</button>
            {this.state.redirect && <Navigate to={'/login'}/>}
        </div>
        )
    }
}

export default HomePage
