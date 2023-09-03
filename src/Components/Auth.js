import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import   Cookies from 'universal-cookie';
import '../styles/Auth.css'
import { auth, provider } from '../CONFIGURATION/Firebase';


 const cookie = new Cookies()

const Auth = ({setIsAuth}) => {

const Sigininwithgoogle=async()=>{

try{
const result = await signInWithPopup(auth,provider);
cookie.set("auth-token", result.user.refreshToken);
setIsAuth(true)



}
catch(error){console.log(error)}

}



    return (
    <div className='auth'>
      <p>Sign In With Google To Continue</p>

      <button onClick={Sigininwithgoogle}> Sign In with Google </button>
    </div>
  )
}

export default Auth
