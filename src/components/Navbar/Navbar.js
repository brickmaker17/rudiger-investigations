import React from 'react';
import styled from 'styled-components';
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
    &:hover {
        color: white;
        border-bottom-style: solid;
        border-bottom-color: #EFEBCA;
        padding-bottom: 10px;
    }
`

const NavBar = () => {
    return (
       <NavB inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="#brand"><RudigerText>RÜDIGER</RudigerText><InvestigationText>INVESTIGATIONS, NMS</InvestigationText></a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                <NavItem eventKey={1} href="#">
                    <LinkText>WHY HIRE US</LinkText>
                </NavItem>
                <NavItem eventKey={2} href="#">
                    <LinkText>WHAT DO WE INVESTIGATE</LinkText>
                </NavItem>
                <NavItem eventKey={3} href="#">
                    <LinkText>STATE-OF-THE-ART</LinkText>
                </NavItem>
                <NavItem eventKey={3} href="#">
                    <LinkText>FAQ</LinkText>
                </NavItem>
                <NavItem eventKey={3} href="#">
                    <LinkText>CONTACT US</LinkText>
                </NavItem>
                <NavDropdown eventKey={4} title="Links" id="basic-nav-dropdown">
                    <MenuItem eventKey={4.1}>Action</MenuItem>
                    <MenuItem eventKey={4.2}>Another action</MenuItem>
                    <MenuItem eventKey={4.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={4.3}>Separated link</MenuItem>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </NavB> 
    )
}

export default NavBar;