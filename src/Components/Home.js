import React, { Component } from 'react';
import '../App.css';
import { Card, Button } from 'reactstrap';
import Navb from './Navbar';
import Projects from './Projects';
import Tech from './Technical';
import { Fade } from "react-reveal";
import Certificates from './Certificates';

class Home extends Component {
    render(){
        return(
            <div className="backG">
                
                <Navb />
                <div className="animation">
                    <div className="welcome">
                    <img className="pic" src={require('../assests/pic.jpg')}  alt="full pic" /><br/>
                    Welcome To My Portfolio&nbsp;&nbsp;
                    </div>                    
                </div>
                <div className="row " id="home">
                <Fade left duration={1000}>
                    <div className="col-12 col-md-6">
                        <div className="name">
                            Shirish<br />Bajpai
                        </div>
                        <div className="frontend">
                            Front-End Developer
                        </div>
                        <div style={{marginLeft: "20%"}}>
                            <a href="https://github.com/shirish1803" style={{color: "#696969"}}><span className="fa fa-github fa-3x icon"  ></span></a>
                            <a href="https://github.com/shirish1803" style={{color: "#696969"}}><span className="fa fa-linkedin fa-3x icon"></span></a>
                            <a href="https://github.com/shirish1803" style={{color: "#696969"}}><span className="fa fa-instagram fa-3x icon"></span></a>
                        </div>
                        
                    </div>
                </Fade>
                <Fade right duration={1000}>
                <div className="col-12 col-md-5" > 
                        <img className="pics" src={require('../assests/pngg.png')} alt="full pic" /><br/>                      
                        <p className="about">I'm an aspiring Web Developer trying to explore more and deep dive further into it such that I expand my skills for the development of company and personal growth.</p>    
                        {/*<input type="button" class="button" value="Contact me" style={{float: "left"}}/>
                        <input type="button" class="button" value="Check My Resume" style={{float: "right"}}/>*/}                                         
                    </div>
                </Fade>
                    
                    
                </div>                
                <Tech />
                <Projects />
                <Certificates />
            </div>
        )
    }
} 
export default Home;