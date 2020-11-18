import React, { Component } from 'react';
import * as emailjs from "emailjs-com";
import { Form } from 'reactstrap';
import ContactUs from './Form';
import Contact from './Form';

class Footer extends Component{

    render(){
        return(
            <div className="backG2" style={{ paddingTop: "3%" }}>
                <div className="container">
                    <h1>Contact me </h1>
                    <hr />
                    <h5 style={{fontWeight: "600"}}>Open for Projects &nbsp; <span className="fa fa-check  " style={{color: "green"}} ></span></h5>
                    <br/>
                    <h4 style={{color: "gray",fontWeight: "600"}}>Front-end Developer &nbsp;| &nbsp;Coding &nbsp;|&nbsp;Athlete&nbsp; <span className="fa fa-heartbeat  " style={{color: "red"}} ></span></h4>
                    <br/>
                    <h6><span className="fa fa-phone  " style={{color: "blue"}} ></span> &nbsp;Phone:&nbsp; 9113837625 <br/><span className="fa fa-envelope  " style={{color: "brown"}} ></span> &nbsp;Email:&nbsp;&nbsp; Shirish.1rn17ee035@gmail.com</h6>
                    <br/>
                    <Form/>
                    <Contact />
                    <br/>
                    <div style={{textAlign: "center",color: "gray"}}><h5>Made by Shirish Bajpai</h5></div>
                                          
                    
                </div>
            </div>    
            
        )
    }
}
export default Footer ;