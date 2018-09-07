import React from 'react';
import styled from 'styled-components';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { 
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
} from 'react-bootstrap';

const RudigerText = styled.p`
    color: #A7A37E;
    font-style: oblique;
    font-family: 'Quantico', sans-serif;
    margin-bottom: 0;
    font-size: 30px;
`;
const InvestigationText = styled.p`
    color: #EFEBCA;
    font-style: oblique;
    font-size: 15px;
`
const NavB = styled(Navbar)`
    background: none;
    border: none;
    min-height: 70px;
    margin-bottom: 0;
    
`
const LinkText = styled.span`
    color: #A7A37E;
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.2s ease-in-out 0s; 
    }
    &:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        border-bottom-style: solid;
        border-bottom-color: #EFEBCA;
    }
`
const Collapse = styled(Navbar.Toggle)`
    border: none;
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.2s ease-in-out 0s; 
    }
    &:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        border-bottom-style: solid;
        border-bottom-color: #EFEBCA;
    }
    && :nth-child(1n+1) {
        background-color: #A7A37E;
    }
    
`
const Dropdown = styled(NavDropdown)`
    && :nth-child(1) {
        text-decoration: none;
        color: #A7A37E;
    }
    && :nth-child(2) {
        background-color: #000000;
    }
`
const Item = styled(NavItem)`
&:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s; 
}
&:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    border-bottom-style: solid;
    border-bottom-color: #EFEBCA;
}
`

const NavBar = () => {
    return (
       <NavB inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <Link to='/'><RudigerText>RÜDIGER</RudigerText><InvestigationText>INVESTIGATIONS, NMS</InvestigationText></Link>
                </Navbar.Brand>
                <Collapse />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                <NavItem>
                <LinkContainer  to="/WhyHireUs">
                    <LinkText>WHY HIRE US</LinkText>
                </LinkContainer>
                </NavItem>
                <Item>
                <LinkContainer  to="/WhatDoWeInvestigate">
                    <Dropdown title='SERVICES' id="basic-nav-dropdown">
                        <MenuItem>PRE-EMPLOYMENT SCREENING</MenuItem>
                        <MenuItem>CRIMINAL DEFENSE</MenuItem>
                        <MenuItem>COMPLEX CIVIL LITIGATION</MenuItem>
                        <MenuItem>MISSING PERSONS/SKIP TRACE</MenuItem>
                        <MenuItem>CORPORATE SECURITY</MenuItem>
                        <MenuItem>INFIDELITY AND DOMESTIC</MenuItem>
                        <MenuItem>GENERAL INVESTIGATIVE SERVICES</MenuItem>
                    </Dropdown>
                </LinkContainer>
                </Item>
                <NavItem>
                <LinkContainer  to="/StateOfTheArt">                
                    <LinkText>STATE-OF-THE-ART</LinkText>
                </LinkContainer>
                </NavItem>
                <NavItem>
                <LinkContainer  to="/FAQ">                
                    <LinkText>FAQ</LinkText>
                </LinkContainer>
                </NavItem>
                <NavItem>
                <LinkContainer to="/ContactUs">
                    <LinkText>CONTACT US</LinkText>
                </LinkContainer>
                </NavItem>
                </Nav>
            </Navbar.Collapse>
        </NavB> 
    )
}

export default NavBar;