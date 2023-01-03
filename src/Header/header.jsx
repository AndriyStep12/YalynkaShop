import './Header.css';
import React, { Component } from "react";
import { render } from "react-dom";
import $ from "jquery";
import mainImage from '../Header/main.png'
import jQuery from 'jquery';
import ButtonMAP from './Button'
import YTree from './LogoY4.png'
// import '../App'
import BodyCenter from '../BodyCenter/BodyCenter';
import AppFunc from '../App';


let arr = JSON.parse(localStorage.getItem('arr'));

// function hideA(){
    
// }

let massArr = [
    {
        idButton: 'Home'
    },
    {
        idButton: 'Products'
    },
    {
        idButton: 'Feedback'
    },
    {
        idButton: 'Cart'
    }
]

let click = false;

let status = false;

class Header extends Component {

    componentDidMount(){

        
    }

    render(){
        return (
        <div className='header' id='header'>
            <div className="lockUp">
                <div className='bit' id='bit'>
                    <div className='logoType' id='logoType'>
                        <img src={mainImage} alt='logo_tree' className='logoImg' />
                        <div className="boxHeadTextImg">
                            {/* <img src={YTree} className="Ytree" alt="Y" /> */}
                            <p>YalynkaShop</p>
                        </div>
                </div>
                <div className='infoType'>
                    <nav className='navBar'>
                        <div className='burger' id='burger' onClick={function(){
                            let lookDown = document.getElementById("lookDown")
                            let linesOne = document.getElementById("lineOne");
                            let linesTwo = document.getElementById("lineTwo");
                            let linesThree = document.getElementById("lineThree");
                            // let lookDownLet = document.getElementById("lookDown");
                            let span_buttones = document.getElementsByClassName("span_buttons")
                            let rooty = document.getElementsByClassName("root")
                            let headerJS = document.getElementById("header")
                            if (click == false){
                                $(document.body).css("overflow-y", "hidden")
                                $(headerJS).css("transition", "1s")
                                $(headerJS).css("z-index", "100000000")
                                $(lookDown).css("transition", "1s")
                                $(lookDown).css("height", "85vh")
                                $(linesTwo).css("display", "none")
                                $(linesOne).css("transform", "rotate(45deg)")
                                $(linesOne).css("margin-bottom", "-5px")
                                $(linesThree).css("transform", "rotate(-45deg)")
                                $(linesThree).css("top", "-50px")
                                setTimeout(function(){
                                    $(span_buttones).css("display", "flex")
                                }, 1000)
                                $(rooty).css("overflow-y", "hidden")
                                click = true;
                            } else if (click == true){
                                $(document.body).css("overflow-y", "scroll")
                                $(headerJS).css("transition", "1s")
                                $(AppFunc).css("overflow-y", "scroll")
                                $(headerJS).css("z-index", "100")
                                $(lookDown).css("height", "0vh")
                                $(linesTwo).css("display", "flex")
                                $(linesOne).css("transform", "rotate(0deg)")
                                $(linesThree).css("transform", "rotate(0deg)")
                                $(linesOne).css("margin-bottom", "5px")
                                $(linesThree).css("top", "-0")
                                // setTimeout(function(){
                                    $(span_buttones).css("display", "none")
                                // }, 1000)
                                $(rooty).css("overflow-x", "hidden")
                                $(rooty).css("overflow-y", "scroll")
                                click = false;
                            }
                        }}>
                            <div className="burger_line" id='lineOne'></div>
                            <div className="burger_line" id='lineTwo'></div>
                            <div className="burger_line" id='lineThree'></div>
                        </div>
                        {massArr.map(item => <ButtonMAP key={item} idButton={item.idButton}/>)}
                    </nav>
                </div>
            </div>
            <div className="lockDown" id='lookDown'>
                {/* {massArr.map(item => <ButtonMAP key={item} idButton={item.idButton}/>)} */}
                <button className='span_buttons' onClick={function(e){
                    document.location.href = window.location.pathname + '#' + 'Home';
                    document.location.reload();
                }} id='burgerButton'>Home</button>
                <button className='span_buttons' onClick={function(e){
                    document.location.href = window.location.pathname + '#' + 'Products';
                    document.location.reload();
                }} id='burgerButton'>Products</button>
                <button className='span_buttons' onClick={function(e){
                    document.location.href = window.location.pathname + '#' + 'Feedback';
                    document.location.reload();
                }} id='burgerButton'>Feedback</button>
                <button className='span_buttons' onClick={function(e){
                    document.location.href = window.location.pathname + '#' + 'Cart';
                    document.location.reload();
                }} id='burgerButton'>Cart</button>
            </div>
        </div>





        <div className="custom-shape-divider-top-1672058157">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
        </div>
    </div>
  );
}
}

export default Header;
