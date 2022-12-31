import logo from './logo.svg';
import React, { Component } from "react";
import { render } from "react-dom";
import $ from "jquery";
import Typed from 'react-typed';
import { TypedOptions } from 'typed.js';
import ReactTyped from 'react-typed';
import { useEffect, useRef } from "react";

import './App.css';
import Head from './Header/header';
// import BodyCenter from './BodyCenter/BodyCenter'
import Snowy from './Snowy/Snowy'
import AllTree from './AllTree/AllTree'
import Formy from './Question/Question'
import Cart from './Bucket/BucketForm'
import HomePage from './Home/Home'
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

    if (document.location.href == 'https://444c-193-107-177-74.ngrok.io/#Cart'){
      appBox = <Cart/>
      helloApp = '';
    } else if (document.location.href == 'https://444c-193-107-177-74.ngrok.io/#Feedback'){
      appBox = <Formy/>
      helloApp = '';
    } else if (document.location.href == 'https://444c-193-107-177-74.ngrok.io/#Trees'){
      appBox = <AllTree/>
      // helloApp = <BodyCenter/>;
    } else if (document.location.href == 'https://444c-193-107-177-74.ngrok.io/#Home'){
      appBox = <HomePage />
      helloApp = '';
    } else if (document.location.href == 'https://444c-193-107-177-74.ngrok.io/'){
      appBox = <HomePage />
      helloApp = '';
    }

    return (
      <div className="App" id='App'>
        {/* <ScreenLoad/> */}
        <Snowy/>
        <Head/>
        {helloApp}
        {appBox}
      </div>
    );
  }
}
export default App;