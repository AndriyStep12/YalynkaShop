import React from "react"
import { ReactDOM } from "react"
import { PropsWithChildren } from "react"
import jQuery from "jquery";
import $ from 'jquery'

class BoxActy extends Component {
    render(props){
        return(
            <div className="boxAct">
                <h3>{this.props.nameAction}</h3>
            </div>
        )
    }
}

export default BoxActy;