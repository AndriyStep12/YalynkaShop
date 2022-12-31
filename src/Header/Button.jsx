import React, {Component} from "react";
import { render } from "react-dom";
import { ReactDOM } from "react";
import $ from "jquery";
import jQuery from "jquery";

class Button extends Component {
    render(props){
        return(
            <span className='span_button' onClick={function(e){
                document.location.href = window.location.pathname + '#' + e.target.id;
                document.location.reload();
            }} id={this.props.idButton}>{this.props.idButton}</span>
        ) 
    }
}

export default Button;