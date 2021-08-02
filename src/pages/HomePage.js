import React from 'react';
import { Container, Navbar, Nav, Jumbotron, Spinner } from 'react-bootstrap'
import { useUser } from '../providers/UserContextProvider';
import { House, Person } from 'react-bootstrap-icons'


export const HomePage = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const { dispatch } = useUser()

    const flipLoading = () => {
        setIsLoading(!isLoading)
    }

    React.useEffect(() => {
        const { searchParams } = new URL(window.location.href);
        const code = searchParams.get('code');
        if (code) {
            authProvider.login({ code })
                .then((res) => {
                    dispatch({ message: "SET", payload: res });
                    flipLoading()
                })
                .catch(err => alert(err))
        }
    })

    return isLoading ? (<Spinner></Spinner>) : (
        <Container>
            <Navbar className="navBar">
                <Nav className="navigationBar">
                    <Nav.Link href="./HomePage">  <House /> </Nav.Link>
                    <Nav.Link href="./SearchTutor.js">Find a Tutor</Nav.Link>
                    <Nav.Link ><Person /></Nav.Link>
                </Nav>
            </Navbar>
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