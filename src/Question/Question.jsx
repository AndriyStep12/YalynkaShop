import React, { Component } from "react";
import { render } from "react-dom";
import $ from 'jquery'
import './Question.css'
import jQuery from "jquery";
import thinkImage from './thinking.gif'


class AllTree extends Component{
    render(){
        return(
            <div className="FormBoxHead">
              <form action="https://formspree.io/f/mrgvznra" id="formy" method="POST">
                <div className="tog">
                  <h2>Please, write feedback about our web app</h2>
                  <input name="name" type="text" placeholder="Name and Sename" id="nameI" />
                  <input name="email" type="email" placeholder="Email" id="emailI"/>
                  <input name="phone" type="phone" placeholder="Phone" id="phoneI"/>
                  <input name="password" type="password" placeholder="Password" id="passI"/>
                  <textarea name="formText" id="formText" cols="30" rows="10" placeholder="Your feedback"></textarea>
                </div>
                <div className="boxSend">
                  <button className="text-box" type="submit" onClick={function(){
                    document.location.href == 'https://444c-193-107-177-74.ngrok.io/#Home';
                    document.location.reload();
                  }}>
                    Send It
                  </button>
                </div>
              </form>
            </div>
        )
    }
}

export default AllTree;