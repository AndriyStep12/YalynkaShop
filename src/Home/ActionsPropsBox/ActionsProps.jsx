import React, {Component} from 'react'
import { render } from 'react-dom'
import { ReactDOM } from 'react'
import jQuery from 'jquery'
import $ from 'jquery'


class PropsGetElement extends Component{
    render(props){
        return(
            <div className="boxProps">
                <div className="div_name">
                    {this.props.nameAction}
                </div>
                <div className="div_description">
                    {this.props.description}
                </div>
            </div>
        )
    }
}

export default PropsGetElement;