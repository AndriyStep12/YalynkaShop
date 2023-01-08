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
            </div>
        </div>
    )
}

export default BoxAct;