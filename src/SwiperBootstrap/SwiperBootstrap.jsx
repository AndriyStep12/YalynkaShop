import actArr from '../Base/Actions/Actions'
import BoxAct from './BoxAct'
import React from 'react'
import { ReactDOM } from 'react'

export default (props) => {
    return(
      <div className="sliedrBox">
        
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            
          {actArr.map(item => <BoxAct key={item} nameAction={item.nameAction} />)}
            
  
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
  
  
      </div>
    )
  }