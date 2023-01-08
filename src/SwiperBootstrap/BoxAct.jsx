import React from "react"
import { ReactDOM } from "react"
import { PropsWithChildren } from "react"
import jQuery from "jquery";
import $ from 'jquery'

function BoxAct (props) {
    return(
        <div className={props.clasName}>
            <div className="boxAct" style={"background-image: url(https://media.istockphoto.com/id/1336074248/photo/blue-christmas-and-new-year-holiday-frame.jpg?b=1&s=170667a&w=0&k=20&c=BQHrKhSk2CU54Pduw4ss9ObCqfoW2jLPEwi2T-5hAp4=)"}>
                <h3>{props.nameAction}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default BoxAct;