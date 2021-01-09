import React, { Component } from 'react';
import '../App.css';
import { Card, Button, Container, Jumbotron } from 'reactstrap';
import Navb from './Navbar';
import Projects from './Projects';
import Tech from './Technical';
import { Fade } from "react-reveal";
import Certificates from './Certificates';
import Emoji from 'a11y-react-emoji'
import Footer from './Footer';
import Internship from './Internship';

class Home extends Component {
    
    render(){
        const date = new Date();
        const hour = date.getHours();
        let timeOfDay;
        if(hour<12){
            timeOfDay = "Morning 🌈";
        }else if(hour>=12 && hour<17){
            timeOfDay = "Afternoon ⛅";
        }else{
            timeOfDay = "Evening 🌜";
        }
        return(
            <div className="backG">
                
                <Navb />
                <div className="animation">
                    <div className="welcome">
                    <img className="pic" src={require('../assests/pic.jpg')}  alt="full pic" /><br/>
                    Welcome To My Portfolio&nbsp;<Emoji symbol="💕 " label="love" />&nbsp;
                    </div>                    
                </div>
                <Container>
                <div className="row " id="home" style={{marginTop: "8%"}}>
                <Fade left duration={1000}>
                    <div className="my-5  col-12 col-md-8 col-sm-6">
                        <p  className="hello">Hello, <span class="timeOfDay">Good {timeOfDay}</span></p>
                        <p className="about">I am  a  dedicated  front-end developer with a keen eye for detail,
                         and a determination to deliver the  highest  quality. I take great pride in my work, and
                           always try to better myself with every project I work on. The main areas of my expertise
                         are HTML(5), CSS(3), JavaScript and React js .{'\u2728'}</p>
                        
                        <div style={{marginLeft: "30%"}}>
                            <a href="https://github.com/shirish1803" ><span className="fab fa-github fa-3x icon" style={{color: "black"}} ></span></a>
                            <a href="https://linkedin.com/in/shirish-bajpai-0077681a0" ><span className="fab fa-linkedin fa-3x icon" style={{color: "#0072b1"}}></span></a>
                            <a href="https://github.com/shirish1803" ><span ><i class="fab fa-hackerrank fa-3x icon" style={{color: "#006400"}}></i></span></a>
                        </div>
                    </div>
                </Fade>
                <Fade right duration={1000}>
                <div className="col-12 col-md-4 col-sm-6 " > 
                        <img className="pics" src={require('../assests/front.png')} alt="full pic" /><br/>                      
                            
                        {/*<input type="button" class="button" value="Contact me" style={{float: "left"}}/>
                        <input type="button" class="button" value="Check My Resume" style={{float: "right"}}/>*/}                                         
                    </div>
                </Fade>
                    
                    
                </div> 
                </Container>              
                <Tech />
                <Projects />
                <Internship/>
                <Certificates />
                <Footer/>
            </div>
        )
    }
} 
export default Home;