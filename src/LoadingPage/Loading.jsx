import './Loading.css'
import React, {Component} from 'react'
import { useEffect } from 'react'
import { render } from 'react-dom'
import jQuery from 'jquery'
import $ from 'jquery'
import car from './car.png'
import tree from './tree.png'


function LoadingScreen (){

    setTimeout(function(){
        alert('dsf')
    }, 1000)

    return(
        <div id='loadScreen' className="loadScreen">
            <div className="razom">
                <div className="box-carPng">
                    <img src={car} alt="" />
                </div>
                <div className="box-treePng">
                    <img src={tree} alt="" />
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen;