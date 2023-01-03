import React, { Component } from "react";
import { render } from "react-dom";
import $ from 'jquery'
import jQuery from "jquery";
import garlandArr from '../Base/Tovars/Garlands'
import Box from '../Box/Box'

let arr = JSON.parse(localStorage.getItem('arr')) || [];

class AllGarlands extends Component{
    render(){
        return(
            <div className="alltreeBase">
                {garlandArr.map(item => <Box box={item.box} key={item} urlPhoto={item.urlPhoto} name={item.name} price={item.price} locationTovar={item.locationTovar} nameClass={item.nameClass} inputNumb={item.inputNumb} />)}
            </div>
        )
    }
}

export default AllGarlands;