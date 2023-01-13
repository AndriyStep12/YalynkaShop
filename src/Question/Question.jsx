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
              <form action="https://formspree.io/f/mrgvznra" id="formyTwo" method="POST">
                <div className="tog">
                  <h2>Якщо хочете нам щось написати, зв'яжіться з нами через цю анкету</h2>
                  <input name="name" type="text" placeholder="Ім'я, Прізвище" id="nameI" />
                  <input name="email" type="email" placeholder="Email" id="emailI"/>
                  <input name="phone" type="phone" placeholder="Номер" id="phoneI"/>
                  <textarea name="formText" id="formText" cols="30" rows="10" placeholder="Ваше повідомлення"></textarea>
                </div>
                <div className="boxSend">
                  <button className="text-box" type="submit">
                    Надіслати
                  </button>
                </div>
              </form>
            </div>
        )
    }
}

export default AllTree;