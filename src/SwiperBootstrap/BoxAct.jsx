import React from "react"
import { ReactDOM } from "react"
import { PropsWithChildren } from "react"
import jQuery from "jquery";
import $ from 'jquery'

function BoxAct (props) {
    return(
        <div className={props.clasName}>
            <div className="boxAct" style={{backgroundImage: 'url(' + props.urlPhoto + ')'}}>
                <h3>{props.nameAction}</h3>
                <p>{props.description}</p>
                <button className="loadBut" id={props.nameAction} onClick={function(e){
                    let goUrl = e.target.id;
                    document.location.href = window.location.pathname + '#' + goUrl;
                    document.location.reload();
                }}>Go there</button>
            </div>
        </div>
    )
}

export default BoxAct;