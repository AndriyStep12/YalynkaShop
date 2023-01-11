import React from "react";
import { Component } from "react";
import jQuery from "jquery";
import $ from 'jquery'
import './ProductsType.css'

class TypeProduct extends Component{
    render(){
        return(
            <div className="boxType">
                <div className="boxInType" id="boxTre" onClick={function(){
                    document.location.href = window.location.pathname + '#Trees';
                    document.location.reload();
                }}>
                    Ялинки
                </div>
                <div className="boxInType" id="boxToy" onClick={function(){
                    document.location.href = window.location.pathname + '#Toys';
                    document.location.reload();
                }}>
                    Іграшки
                </div>
                <div className="boxInType" id="boxGar" onClick={function(){
                    document.location.href = window.location.pathname + '#Garlands';
                    document.location.reload();
                }}>
                    Гірлянди
                </div>
            </div>
        )
    }
}

export default TypeProduct