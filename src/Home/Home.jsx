import './Home.css'

import React, {Component} from 'react'
import { render } from 'react-dom'
import { ReactDOM } from 'react'
import jQuery from 'jquery'
import $ from 'jquery'
import actionArr from '../Base/Actions/Actions'
import BoxProps from './ActionsPropsBox/ActionsProps'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import informationArr from '../Base/Information/Information'
import PropsBoxInfo from './PropsBoxHome/PropsBoxHome'

function Home (){

    const el = useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["<span id='red'>trees</span>", "<span id='yellow'>toys</span>", "<span id='green'>garlands</span>"],
            smartBackspace: true, // this is a default
            showCursor: true,
            typeSpeed: 120,
            backSpeed: 40,
            smartBackspace: true, // this is a default
            loop: true,
            backDelay: 2000,
        })

    })

    return(
        <div className="homePage">
            {/* {actionArr.map(item => <BoxProps key={item} nameAction={item.nameAction} description={item.description} />)} */}
            <div className="box_CenterHome">
                <div className="wydno">
                    <div className="textZn" id="textZn">If you want to buy Christmas <span ref={el}></span></div>
                    <button className='clickHere' onClick={function(){
                        document.location.href = window.location.pathname + '#' + 'Trees';
                        document.location.reload();
                    }}><span>🎄Click here🎄</span><i></i></button>
                </div>
            </div>
            <div className="nextBox">
                {informationArr.map(item => <PropsBoxInfo key={item} flD={item.flD} nameInformation={item.nameInformation} dataInfo={item.dataInfo} imageUrl={item.imageUrl} />)}
            </div>
        </div>
    )
}

export default Home;