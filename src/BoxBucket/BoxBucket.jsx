import React, {Component} from "react";
import { render } from "react-dom";
import '../Bucket/BucketForm'
import imageLook from '../AllTree/sale.png'
import { ReactDOM } from "react";
import jQuery, { nodeName } from "jquery";
import $ from 'jquery'
import { ReactElement } from "react";
import emailjs from "emailjs-com";


let box_backetVal;

let arr = JSON.parse(localStorage.getItem('arr')) || []

function perevirka(targ){
    
}

class BoxBucket extends Component {
    componentDidMount(){
        
    }

    render(props){
        return(
            <div className="box_backet" id={this.props.divNext}>
                <span className="nameBox">{this.props.nameProduct}</span>
                <span className="locateBox">From {this.props.locationOfTovar}</span>
                <span className="countBox">Count: {this.props.countTovar}</span>
                <span className="priceBox">For pay {this.props.pricePush*this.props.countTovar}$</span>
                {/* <div className="close" id={this.props.buttonNext} onClick={function(e){
                    alert(localStorage)
                }}>
                    <span>X</span>
                </div> */}
            </div>
        )
    }
}

export default BoxBucket;