import React, { Component } from "react";
import { render } from "react-dom";
import $ from 'jquery'
import saleImg from '../AllTree/sale.png'
import jQuery from "jquery";
import arrTovar from '../Base/Tovars/Tovars'

let arr = JSON.parse(localStorage.getItem('arr')) || [];
let numb_tovars = JSON.parse(localStorage.getItem('numb_')) || 0;
let numb_products = JSON.parse(localStorage.getItem('products_')) || 0;
let price_products = JSON.parse(localStorage.getItem('prices_')) || 0;

let oldValue = 0;

class BoxContent extends Component {

    componentDidMount(){
        jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
        jQuery('.quantity').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                oldValue = oldValue;
            } else {
                oldValue += 1;
            }
            spinner.find("input").val(oldValue);
            spinner.find("input").trigger("change");
            $(this.props.box).html(this.props.price*oldValue)
        });

        btnDown.click(function() {
            oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    oldValue = oldValue;
                } else {
                    oldValue -= 1;
                }
                spinner.find("input").val(oldValue);
                spinner.find("input").trigger("change");
                $(this.props.box).html(this.props.price*oldValue)
             });
        });
    }

    constructor(props) {
        super(props);
        this.state = {
          isGoing: true,
          numberOfGuests: 2
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'number' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render(){
        return(
                <div className="box_tree">
                    <div className="left-side">
                        <img src={this.props.urlPhoto} className="saleImage" alt="" />
                    </div>
                    <div className="right-side">
                        <div className="local">
                            <span className={this.props.nameClass} id={this.props.name}>Name: {this.props.name}</span>
                            <span className={this.props.nameClass} id={this.props.price}>Price: {this.props.price}</span>
                            <span className={this.props.nameClass} id={this.props.locationTovar}>Location: {this.props.locationTovar}</span>
                        </div>
                        <div className="hidenBox">
                            <div className="hb">
                                <div className="boxyy">
                                    Count:
                                    <div class="quantity">
                                        <input type="number" className={this.props.inputNumb} id={this.props.inputNumb} min="1" max="9" step="1" value="1" onChange={this.handleInputChange}/>
                                    </div> 
                                </div>
                                <div className="priceBox">
                                Price for one <span>{this.props.price}$</span>
                                </div>
                                <button className={this.props.box} id="addBucketId"  onClick={function(e, props){
                                    alert('Added to bucket. You can delete this product in the bucket')
                                    let numberOfBox = (e.target.className).substring(9);
                                    let nameInp = 'input' + numberOfBox
                                    let obj = document.getElementsByClassName('name' + numberOfBox)
                                    let nameObj = [];
                                    for (let i = 0; i<3; i++){
                                        nameObj.push(obj[i].id)
                                    }
                                    
                                    let product = {
                                        namePush: nameObj[0],
                                        pricePush: nameObj[1],
                                        countTovar: document.getElementById(nameInp).value,
                                        locationOfTovar:  nameObj[2],
                                        buttonNext: 'boxButtonName' + numberOfBox,
                                        divNext: 'divButtonName' + numberOfBox
                                    }

                                    arr.push(product)
                                    // let numy = document.getElementById(nameInp).value;
                                    // numy = parseInt(numy);
                                    // numy = numy + numb_tovars;
                                    // localStorage.setItem('numb_', JSON.stringify(numy))
                                    //-------------------------------------------------------------
                                    numb_products += 1;
                                    localStorage.setItem('products_', JSON.stringify(numb_products))
                                    //-----------------------------------------------------------------------------------

                                    let GGG = parseInt(nameObj[1])
                                    price_products = parseInt(price_products);
                                    let valuePr = document.getElementById(nameInp).value;
                                    valuePr = parseInt(valuePr);
                                    price_products = price_products + GGG*valuePr;
                                    // alert(GGG)
                                    // alert(valuePr)
                                    // alert(price_products)
                                    localStorage.setItem('prices_', JSON.stringify(price_products));

                                    //-----------------------------------------------------------------------------------
                                    console.log(arr)
                                    nameObj = [];
                                    let thisButon = e.target.className;
                                    JSON.stringify(localStorage.setItem('arr', JSON.stringify(arr)))
                                    }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default BoxContent;
