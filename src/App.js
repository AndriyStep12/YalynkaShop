import logo from './logo.svg';
import React, { Component } from "react";
import { render } from "react-dom";
import $ from "jquery";
import { TypedOptions } from 'typed.js';
import { useEffect, useRef } from "react";
import emailjs from "emailjs-com";



import './App.css';
import Head from './Header/header';
// import BodyCenter from './BodyCenter/BodyCenter'
import Snowy from './Snowy/Snowy'
import AllTree from './AllTree/AllTree'
import Formy from './Question/Question'
import Cart from './Bucket/BucketForm'
import HomePage from './Home/Home'
import TypeProduct from './ProductsGet/ProductsType';
import ScreenLoad from './LoadingPage/Loading'

let arr = JSON.parse(localStorage.getItem('arr')) || []
let numb_tovars = JSON.parse(localStorage.getItem('numb_')) || 0; 

let appBox;
let helloApp;

// if (document.location.pathname == 'http://localhost:3000/'){
//   alert('f')
// }

class App extends Component {

  
  
  render(){

    if (document.location.href == 'https://yalynka-shop.vercel.app/#Cart'){
      appBox = <Cart/>
      helloApp = '';
    } else if (document.location.href == 'https://yalynka-shop.vercel.app/#Feedback'){
      appBox = <Formy/>
      helloApp = '';
    } else if (document.location.href == 'https://yalynka-shop.vercel.app/#Trees'){
      appBox = <AllTree/>
      // helloApp = <BodyCenter/>;
    } else if (document.location.href == 'https://yalynka-shop.vercel.app/#Home'){
      appBox = <HomePage />
      helloApp = '';
    } else if (document.location.href == 'https://yalynka-shop.vercel.app/'){
      appBox = <HomePage />
      helloApp = '';
    }

    return (
      <div className="App" id='App'>
        {/* <ScreenLoad/> */}
        <TypeProduct/>
        <Snowy/>
        <Head/>
        {helloApp}
        {appBox}
      </div>
    );
  }
}
export default App;