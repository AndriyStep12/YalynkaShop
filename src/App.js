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
import AllGarlands from './AllGarlands/AllGarlands'
import AllToys from './AllToys/AllToys'
import Formy from './Question/Question'
import Cart from './Bucket/BucketForm'
import HomePage from './Home/Home'
import TypeProduct from './ProductsGet/ProductsType';
import ScreenLoad from './LoadingPage/Loading'
import SwiperBoot from './SwiperBootstrap/SwiperBootstrap'

let arr = JSON.parse(localStorage.getItem('arr')) || []
let numb_tovars = JSON.parse(localStorage.getItem('numb_')) || 0; 

let appBox;
let helloApp;
let oneType;
let twoType;
let thrType;

// if (document.location.pathname == 'http://localhost:3000/'){
//   alert('f')
// }

class App extends Component {

  
  
  render(){

    if (document.location.href == 'https://yalynka-shop.vercel.app/#Cart'){
      appBox = <Cart/>
      helloApp = '';
      oneType = '';
      twoType = '';
      thrType = '';
    } else if (document.location.href == 'https://yalynka-shop.vercel.app/#Feedback'){
      appBox = <Formy/>
      helloApp = '';
      oneType = '';
      twoType = '';
      thrType = '';
    } else if (document.location.href == 'https://yalynka-shop.vercel.app/#Trees'){
      appBox = <AllTree/>
      // helloApp = <BodyCenter/>;
    } else if (document.location.href == 'https://yalynka-shop.vercel.app/#Home'){
      appBox = <HomePage />
      helloApp = '';
      oneType = '';
      twoType = '';
      thrType = '';
    } else if (document.location.href == 'https://yalynka-shop.vercel.app/'){
      appBox = <HomePage />
      helloApp = '';
      oneType = '';
      twoType = '';
      thrType = '';
    } else if (document.location.href == 'https://yalynka-shop.vercel.app/#Products'){
      appBox = <TypeProduct/>
      oneType = '';
      twoType = '';
      thrType = '';
      helloApp = '';
    } else if (document.location.href == 'https://yalynka-shop.vercel.app/#Garlands'){
      appBox = <AllGarlands/>
      helloApp = '';
      oneType = '';
      twoType = '';
      thrType = '';
    } else if (document.location.href == 'https://yalynka-shop.vercel.app/#Toys'){
      appBox = <AllToys/>
      helloApp = '';
      oneType = '';
      twoType = '';
      thrType = '';
    } else if (document.location.href == 'https://yalynka-shop.vercel.app/#Sale'){
      appBox = <SwiperBoot/>
      helloApp = '';
      oneType = '';
      twoType = '';
      thrType = '';
    }

    return (
      <div className="App" id='App'>
        <ScreenLoad/>
        <Snowy/>
        <Head/>
        {helloApp}
        {appBox}
        {oneType}
        {twoType}
        {thrType}
      </div>
    );
  }
}
export default App;