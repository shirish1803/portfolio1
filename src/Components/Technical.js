import React, { Component } from 'react';
import { Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import Navb from './Navbar';
import { Fade } from "react-reveal";

class Tech extends Component {
    render() {
        return (
            <div className="backG1" id="tech" style={{ paddingTop: "10%" }}>

                <div className="container">

                    <div className="row ">
                        <Fade left duration={1000}>
                            <div className="col-12 offset-1 col-md-5" style={{ paddingTop: "3em" }}>
                                <img className="small" src={require('../assests/hicl.png')} alt="full pic" />
                            </div>
                        </Fade>
                        <Fade right duration={1000}>
                            <div className="col-12  col-md-6">
                                <div style={{ fontSize: "2.5em", fontamily: "'Lexend Mega', sans-serif", textAlign: "center" }}>
                                    Technical Skills
                            </div>
                                <span className="fab fa-html5 skill" style={{ fontSize: "100px" }}></span>
                                <span className="fab fa-css3 skill" style={{ fontSize: "100px" }}></span>
                                <span className="fab fa-bootstrap skill" style={{ fontSize: "100px" }}></span>
                                <span className="fab fa-js-square skill" style={{ fontSize: "100px" }}></span>
                                <span className="fab fa-react skill" style={{ fontSize: "100px" }}></span>
                                <span className="fab fa-adobe skill" style={{ fontSize: "100px" }}></span>
                            </div>
                        </Fade>

                    </div>
                </div>

            </div>
        )
    }
}
export default Tech;