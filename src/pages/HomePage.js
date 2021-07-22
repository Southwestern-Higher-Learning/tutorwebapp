import React from 'react';
import { Container, Navbar, Nav, Jumbotron } from 'react-bootstrap'
import { NavigationBar } from '../components/NavigatonBar';


export const HomePage = () => {
    return (
        <Container id="home">
            <NavigationBar></NavigationBar>
            <Jumbotron>
                <h1>Welcome top the SU tutor app!</h1>
                <p>
                    Welcome to the SU tutor web page. This webiste will serve as a place holder to access, search for, and learn
                    more information about the tutoring offered within the varying departments.
                        </p>
            </Jumbotron>
            <div className="info">
                <Container>
                    <div className="class">
                        <div className="additionalInfo">
                            <h5>Before your appointment</h5>
                        fill out this form
                    </div>
                        <div className="additionalInfo">
                            <h5>Additional Resources</h5>
                            <a href="https://www.southwestern.edu/offices/success/">Center for Academic Success</a>
                        </div>
                        <div className="additionalInfo">
                            <h5>Tips and Tricks</h5>
                    Go to tutoring the day before the assignment is due.
                    </div>
                    </div>
                </Container>
                <Navbar className="navBar">
                    <Nav className="footer">
                        Need to report a bug? please email whitehiw@southwestern.edu with the issue you are experincing
                </Nav>
                </Navbar>
            </div>
        </Container>
    )
}