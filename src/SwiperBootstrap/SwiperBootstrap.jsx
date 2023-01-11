import actArr from '../Base/Actions/Actions'
import BoxAct from './BoxAct'
import React from 'react'
import './SwiperBootstrap.css'
import { ReactDOM } from 'react'
import { Component } from 'react'
import BoxActionGet from '../BoxActions/BoxActions'
import DataBaseActions from '../Base/Actions/Actions'

let valAct = '';

class SwiperB extends Component {

    

    render(){

      // if (actArr == 0){
      //   valAct = 'Sorry, but there is no action'
      // } else {
      //   for (let i = 0; i <= actArr.length; i++){
          
      //   }
      // }


    return(
      <div className="sliedrBox">
        
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">

            <ol class="carousel-indicators">
                {actArr.map(item => <li data-target="#carouselExampleIndicators" data-slide-to={item} className={item.activeStan}></li>)}
            </ol>

            {actArr.map(item => <BoxAct key={item} description={item.description} urlPhoto={item.urlPhoto} clasName={item.clasName} nameAction={item.nameAction} />)}
            
  
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
  
        <div className="actionGet" id="actionGet">

          {/* {valAct} */}

          {DataBaseActions.map(index =>
            index.items.map(item => <BoxActionGet key={item || index} nameAction={index.nameAction} box={item.box} price={item.price} imgItem={item.imgItem} nameClass={item.nameClass} nameT={item.nameT} locationItem={item.locationItem} inputNumb={item.inputNumb} />)
          )}


        </div>
  
      </div>
    )
    }
  }

  export default SwiperB;