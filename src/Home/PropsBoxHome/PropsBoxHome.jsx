import React, {Component} from 'react'
import { render } from 'react-dom'
import { ReactDOM } from 'react'
import jQuery from 'jquery'
import $ from 'jquery'

class PropsBoxHome extends Component{
    render(){
        return(
            <div className="boxesThFv" id={this.props.flD}>
                <div className="left-side">
                    <img className='thisPic' src={this.props.imageUrl} alt="" />
                </div>
                <div className="right-side">
                    <div className="boxInsideTwo">
                        <div className="HeadProps">{this.props.nameInformation}</div>
                        <div className="AnotherProps">{this.props.dataInfo}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PropsBoxHome;