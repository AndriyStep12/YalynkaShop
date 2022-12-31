import React, { Component } from "react";
import { render } from "react-dom";
import $ from 'jquery'
import './AllTree.css'
import saleImg from './sale.png'
import jQuery from "jquery";
import tovarsArr from '../Base/Tovars/Tovars'
import Box from '../Box/Box'

let arr = JSON.parse(localStorage.getItem('arr')) || [];

class AllTree extends Component{
    render(){
        return(
            <div className="alltreeBase">
                {tovarsArr.map(item => <Box box={item.box} key={item} urlPhoto={item.urlPhoto} name={item.name} price={item.price} locationTovar={item.locationTovar} nameClass={item.nameClass} inputNumb={item.inputNumb} />)}
            </div>
        )
    }
}

export default AllTree;