import './Loading.css'
import React, {Component} from 'react'
import { useEffect } from 'react'
import { render } from 'react-dom'
import jQuery from 'jquery'
import $ from 'jquery'
import car from './car.png'
import tree from './tree.png'
import { useState } from 'react'


function LoadingScreen (){

    const Loading = true;

    
    while (Loading == true){
        if (Loading == true){
            setTimeout(function(){
                let documen = document.getElementById("loadScreen")
                $(documen).css("display", "none")
                Loading == false
            }, 1000)
        } else if (Loading != false){
            let documen = document.getElementById("loadScreen")
            $(documen).css("display", "none")
        }
    }

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