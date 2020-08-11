import React, { Component } from 'react';
import '../App.css';
import { Card, Button } from 'reactstrap';
import Navb from './Navbar';
import Projects from './Projects';
import Tech from './Technical';
import { Fade } from "react-reveal";
import Certificates from './Certificates';
import Emoji from 'a11y-react-emoji'

class Home extends Component {
    render(){
        return(
            <div className="backG">
                
                <Navb />
                <div className="animation">
                    <div className="welcome">
                    <img className="pic" src={require('../assests/pic.jpg')}  alt="full pic" /><br/>
                    Welcome To My Portfolio&nbsp;<Emoji symbol="💕 " label="love" />&nbsp;
                    </div>                    
                </div>
                <div className="row " id="home">
                <Fade left duration={1000}>
                    <div className="col-12 offset-1 col-md-6">
                        <p  className="hello">Hello,</p>
                        <p className="about">I’m a  dedicated  front-end developer with a keen eye for detail, and a determination to deliver the very highest quality. I take great pride in my work, and I always try to better myself with every project I work on. The main areas of my expertise are HTML(5), CSS(3), JavaScript and React js .{'\u2728'}</p>
                        
                        <div style={{marginLeft: "20%"}}>
                            <a href="https://github.com/shirish1803" ><span className="fa fa-github fa-3x icon" style={{color: "black"}} ></span></a>
                            <a href="https://github.com/shirish1803" ><span className="fa fa-linkedin fa-3x icon" style={{color: "#0072b1"}}></span></a>
                            <a href="https://github.com/shirish1803" ><span ><i class="fab fa-hackerrank fa-3x" style={{color: "#006400"}}></i></span></a>
                        </div>
                        
                    </div>
                </Fade>
                <Fade right duration={1000}>
                <div className="col-12 col-md-5" > 
                        <img className="pics" src={require('../assests/front.png')} alt="full pic" /><br/>                      
                            
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