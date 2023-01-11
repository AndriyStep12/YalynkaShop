import React, {Component} from "react";
import { render } from "react-dom";
import '../Bucket/BucketForm'
import imageLook from '../AllTree/sale.png'
import { ReactDOM } from "react";
import jQuery from "jquery";
import $ from 'jquery'

let arr = JSON.parse(localStorage.getItem('arr')) ;

class BoxBucketNone extends Component {
    componentDidMount(){
        
    }

   
    
    render(props){
        return(
            <div className="box_backet" id="nonyy">
                <span className="nameBox">У вас наразі пуста корзина</span>
                <span className="locateBox"></span>
                <span className="countBox"></span>
                <span className="priceBox"></span>
            </div>
        )
    }
}

export default BoxBucketNone;