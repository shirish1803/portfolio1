import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Col, CardTitle, Row } from 'reactstrap';
import '../App.css';
import { Fade } from "react-reveal";
import { CERTIFICATE } from '../Shared/certificate';

class Certificates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            certificates:  CERTIFICATE,
        };
    }
    render() {
        const certificateCard = this.state.certificates.map((data, id) => {
            return (
                <Col sm="4" key={id}>
                    <Card className="card" style={{ backgroundColor: "rgb(240, 248, 247)" }} body shadow>
                        
                        <CardImg top width="100%" src={data.image} alt={data.alt} />
                        <CardText style={{textAlign: "center",fontFamily: "monospace"}}><h5>{data.about}</h5></CardText>
                    </Card>
                </Col>
            );
        });
        return (
            <div className="backG1" style={{paddingBottom: "70px"}}>
                <div className="container">
                    <Fade left duration={1000} >
                        <div className="" style={{ paddingTop: "5%" }}>
                            <h1 id="certification" className="heading">Certification</h1>
                        </div>
                    </Fade>
                    <Fade right duration={1000} >
                        <Row>{certificateCard}</Row>
                    </Fade>

                </div>




            </div>
        );
    }
}
export default Certificates;