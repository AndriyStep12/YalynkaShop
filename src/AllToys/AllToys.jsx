import React, { Component } from "react";
import { render } from "react-dom";
import $ from 'jquery'
import jQuery from "jquery";
import toysArr from '../Base/Tovars/Garlands'
import Box from '../Box/Box'

let arr = JSON.parse(localStorage.getItem('arr')) || [];

class AllToys extends Component{
    render(){
        return(
            <div className="alltreeBase">
                {toysArr.map(item => <Box box={item.box} key={item} urlPhoto={item.urlPhoto} name={item.name} price={item.price} locationTovar={item.locationTovar} nameClass={item.nameClass} inputNumb={item.inputNumb} />)}
            </div>
        )
    }
}

export default AllToys;