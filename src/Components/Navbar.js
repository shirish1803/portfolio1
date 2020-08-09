import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavLink,  Collapse, NavItem } from 'reactstrap';
import { Link, animateScrol as scroll} from "react-scroll";
import '../App.css';


class Navb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            
        };
        this.toggleNav = this.toggleNav.bind(this);
               
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <>
                <Navbar dark expand="md" className="Navbar" sticky="top">
                    
                    <NavbarToggler  onClick={this.toggleNav} style={{border: "1px solid black", color: "black"}}>=</NavbarToggler>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <NavLink ><span className="link"><i class="fas fa-chevron-left turn" style={{color: "orange"}}></i>  <span style={{fontSize: "25px"}}>Shirish <span style={{color: "yellow"}}>/</span></span><i class="fas fa-chevron-right turn" style={{color: "orange"}}></i></span></NavLink>                                
                                    <div className="ml-auto">
                            <Nav navbar style={{ cursor: "pointer" }}>
                                <NavItem >
                                    <Link activeClass="active"
                                          to="home"
                                          spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration={500}><span className="link">About Me&nbsp;&nbsp;&nbsp;&nbsp; </span></Link>
                                </NavItem>
                                <NavItem>
                                <Link activeClass="active"
                                          to="project"
                                          spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration={500} ><span className="link"> Projects&nbsp;&nbsp;&nbsp;&nbsp; </span></Link>
                                </NavItem>
                                <NavItem>
                                <Link activeClass="active"
                                          to="tech"
                                          spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration={500}><span className="link"> Technical Skills&nbsp;&nbsp;&nbsp; </span></Link>
                                </NavItem>
                                <NavItem>
                                <Link activeClass="active"
                                          to="certification"
                                          spy={true}
                                          smooth={true}
                                          offset={-70}
                                          duration={500}><span className="link"> certifications&nbsp;&nbsp;&nbsp; </span></Link>
                                </NavItem>
                            </Nav>
                            </div>
                        </Collapse>
                   
                </Navbar>
            </>
        )
    }
}
export default Navb;