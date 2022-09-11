import React, {useState} from 'react'
import "./Login.css"
import {Link , useHistory } from "react-router-dom";
import { auth } from './firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

function Login() {
  const history =useHistory();
const [email,setEmail] = useState('');
const [password, setPassword] = useState('');


    const login = (e) =>{
     e.preventDefault();   
    signInWithEmailAndPassword(auth, email,password)
    .then((auth) => {
      history.push("/");

    })
    .catch((error) => alert(error.message) );
    
    }
    const register = async () =>{
       try{
        const user = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user)

       } catch (error){
        console.log(error.message);
       } }  

  return (
    <div className='login'>
        <Link to ="/">
            <img className='login__logo'
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign in </h1>
                <form >
                <h5>E-mail</h5> 
                <input  value = {email} onChange={(e) => { setEmail(e.target.value)}}
                type="email" /> 
                <h5>Password</h5>  
                <input  value = {password} onChange= {(e) => {setPassword(e.target.value)}}
                type="password" />
                
                <button  onClick={login} type= "submit" className='login__signInButton'>Sign In </button>


                </form>
                <p>By signing you agree to the Amazon's Conditions  of Use and Sale </p>
                <button  onClick={register} className='login__registerButton'> Create your Amazon Account </button>
                </div>

    
    </div>
  )
}

export default Login;
