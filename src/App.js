import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect } from 'react';
import Header from "./Header";
import Home from './Home';
import Checkout from "./Checkout"
import Login from "./Login"
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { onAuthStateChanged } from 'firebase/auth';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js' 

const promise = loadStripe("pk_test_51LgIbVHsaGqn51Ne7q7W1m9rBCyLe2FeT58crOUxwNxSKj7Gr7i0sBwacbtC34denjAkG2doS4eZmMdt5eIkNIrl003Fdsem92");

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect (() =>{

 auth.onAuthStateChanged(authUser => {
   console.log("THE USER IS >>> ", authUser)
  if (authUser){
  dispatch ({
    type:"SET__USER",
    user:authUser
  });
  }
  else{
    dispatch ({
      type:"SET__USER",
      user:null,
    })

  }
});

  } , []);

  console.log(user);
  return (
    <Router>
    <div className="app">
    

    <Switch>
      <Route path="/checkout">
      <Header/>
        <Checkout/>
         </Route>
        <Route path="/login">
        <Login/>
         </Route>
         <Route path="/payment">
      <Header/>
      <Elements stripe={promise}>

      <Payment/>
      </Elements>
         </Route>
    
    {/* this is the default route */}
        <Route path="/">
        <Header/>
         < Home/>
         </Route> 
         </Switch>
    </div> 
    </Router>
  );
} 

export default App;
