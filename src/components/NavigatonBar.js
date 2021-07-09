import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { House, Person } from 'react-bootstrap-icons'

export const NavigationBar = () => {
    return (
        <Navbar className="navBar">
            <Nav className="navigationBar">
                <Nav.Link href="./HomePage">  <House /> </Nav.Link>
                <Nav.Link href="../components/SearchTutor">Find a Tutor</Nav.Link>
                <Nav.Link><Person /></Nav.Link>
            </Nav>
        </Navbar>
    )
}
