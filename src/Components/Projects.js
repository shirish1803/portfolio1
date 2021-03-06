import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Col, CardTitle, Row } from 'reactstrap';
import Navb from './Navbar';
import '../App.css';
import { Fade } from "react-reveal";
import { PROJECTS } from '../Shared/project';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS,
        };
    }
    render() {
        const projectcard = this.state.projects.map((data, id) => {
            return (
                <Col sm="4" key={id}>
                    <Card className="card" style={{backgroundColor: "rgb(240, 248, 247)"}} body shadow>
                        <CardTitle style={{textAlign: "center",fontFamily: "monospace"}}>
                            <h5>{data.name}</h5>
                        </CardTitle>
                        <CardText>{data.description}</CardText>
                        <div className="justify-content-center row ">
                            <div className="m-4">
                                <a
                                    className="button"
                                    href={data.githublink}
                                    target="_blank">Github link</a>
                            </div>
                            <div className="m-4">
                                <a className="button"
                                    href={data.projectlink}
                                    target="_blank">
                                    Project Link</a>
                            </div>
                        </div>
                    </Card>
                </Col>
            );
        });
        return (
            <div className="backG1" style={{paddingBottom: "70px"}}>
                <div className="container">
                    <Fade left duration={1000} >
                        <div className="" style={{ paddingTop: "5%" }}>
                            <h1 id="project" className="heading">Projects</h1>
                        </div>
                    </Fade>
                    <Fade right duration={1000} >
                        <Row>{projectcard}</Row>
                    </Fade>

                </div>




            </div>
        );
    }
}
export default Projects;