import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Col, CardTitle, Row } from 'reactstrap';
import Navb from './Navbar';
import '../App.css';
import { Fade } from "react-reveal";
import { INTERNSHIPS } from '../Shared/internship';

class Internship extends Component {
    constructor(props) {
        super(props);
        this.state = {
            internships: INTERNSHIPS,
        };
    }
    render() {
        const internshipcard = this.state.internships.map((data, id) => {
            return (
                <Col sm="4" key={id}>
                    <Card className="card" style={{backgroundColor: "rgb(240, 248, 247)"}} body shadow>
                        <CardTitle style={{textAlign: "center",fontFamily: "monospace"}}>
                            <h5>{data.name}</h5>
                        </CardTitle>
                        <CardImg top width="100%" src={data.image} alt={data.alt} />
                    </Card>
                </Col>
            );
        });
        return (
            <div className="backG1" style={{paddingBottom: "70px"}}>
                <div className="container">
                    <Fade left duration={1000} >
                        <div className="" style={{ paddingTop: "5%" }}>
                            <h1 id="internship" className="heading">Internships</h1>
                        </div>
                    </Fade>
                    <Fade right duration={1000} >
                        <Row>{internshipcard}</Row>
                    </Fade>

                </div>




            </div>
        );
    }
}
export default Internship;