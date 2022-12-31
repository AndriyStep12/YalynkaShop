import React, {Component} from "react";
import { render } from "react-dom";
import './BucketForm.css'
import { ReactDOM } from "react";
import BoxBucket from '../BoxBucket/BoxBucket'
import BoxBucketNone from '../NoneArr/NoneArr'
import $ from 'jquery'
import { useRef } from 'react';
import emailjs from "emailjs-com";

let arr = JSON.parse(localStorage.getItem('arr'));

function BucketForm () {
    

    // render(props){
        let valy = '';

        for (let i = 0; i<=JSON.parse(localStorage.getItem("products_"))-1; i++){
            if (valy == ''){
                valy = valy + arr[i].namePush  + ', count ' + arr[i].countTovar   + ', ' + arr[i].pricePush + '$';
            } else if (valy != ''){
                valy = valy + '; ' + arr[i].namePush  + ', count ' + arr[i].countTovar   + ', ' + arr[i].pricePush + '$';
            }
        }

        let element = document.getElementsByClassName("boxEmail");
        let boxBucket = document.getElementById("boxBucket");

        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();
            emailjs.sendForm('service_8vlvlu8', 'template_hbklpha', form.current, 'yboFh_8PWZssV4c4l')
                .then((result) => {
                    console.log(result.text);
                    e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
        };

        let mass;

        if (arr == null){
            mass = <BoxBucketNone/>
        } else {
            mass = arr.map(item => <BoxBucket key={item} divNext={item.divNext} buttonNext={item.buttonNext} nameProduct={item.namePush} countTovar={item.countTovar} locationOfTovar={item.locationOfTovar} pricePush={item.pricePush} />)
        }
        

        return(
            <div className="buck">
                <div className="boxBucket" id="boxBucket">
                    <div className="head">
                        <h2>Your Cart</h2>
                    </div>
                    <div className="cent">
                        <div className="boxCentAdd" id="boxCentAdd">
                            {mass}
                        </div>
                        <button id="addBucketId" onClick={function(){
                            arr = null;
                            localStorage.clear();
                            document.location.reload();
                        }}>Delete all</button>
                        <button className="delete" onClick={function(){
                            
                            $(element).css("top", "0vh")
                            $(boxBucket).css("z-index", "5")
                        }}>Buy</button>
                    </div>
                </div>
                <div className="boxEmail">
                    <div className="box-email">
                        <h4>Type here your email, phone and location for delivery</h4>
                        <form ref={form} id="formy" onSubmit={sendEmail}>
                            <input type="text" name="to_name" placeholder="Name" />
                            <input type="email" name="to_email" placeholder="Email" />
                            <input type="phone" name="to_phone" placeholder="Phone" />
                            <input type="location" name="to_locate" placeholder="Location" />
                            <input className="displayNone" type="text" name="to_types" id="allWhatYouWantNumber" value={
                                JSON.parse(localStorage.getItem("products_"))
                            } />
                            <input className="displayNone" type="text" name="to_pay" value={
                                JSON.parse(localStorage.getItem("prices_"))
                            } id="allWhatYouWantNumber" />
                            <input disabled className="boxPay" type="text" name="to_pay" value={ 'Total: ' + JSON.parse(localStorage.getItem("prices_")) + '$' }/>
                            <input className="displayNone" type="text" name="to_products" id="allWhatYouWantNumber" value={valy} />
                            <input  id="sendy" type="submit" value="Send" onClick={function(){
                                // document.location.href == 'https://444c-193-107-177-74.ngrok.io/#Home';
                                // document.location.reload();
                                alert("Sent successfully. Check your Gmail")
                                localStorage.clear();
                                document.location.reload();
                            }} />
                            <button  id="sendy" onClick={function(){
                                
                                $(boxBucket).css("z-index", "5")
                                $(element).css("top", "-100vh")
                            }}>Close</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
// }

export default BucketForm;
