import './Loading.css'
import React, {Component} from 'react'
import { useEffect } from 'react'
import { render } from 'react-dom'
import jQuery from 'jquery'
import $ from 'jquery'
import car from './car.png'
import tree from './tree.png'
import Load from './Load'


function LoadingScreen (){

    let loadGet = <Load/>

    useEffect(() => {
        setTimeout(function(){
            loadGet = ''
        }, 9000)
    }, [])

    return(
        {loadGet}
    )
}

export default LoadingScreen;