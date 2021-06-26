import React from "react";
import { useUser } from "../providers/UserContextProvider";
import { Container, Row, Button, Col, Spinner, Jumbotron } from "react-bootstrap"
import { authProvider } from '../providers/LoginUser'

export const LoginPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const login = () => {
    setIsLoading(true)
    authProvider.login({})
      .then(setIsLoading(false))
      .catch(err => alert(err))
  }

  return (
    <Container className="loginContainer" fluid>
      <Row>
        <Col>
          <Container>
            <Jumbotron>
              <h1>Honor Code Policy</h1>
              <p>
                This application was developed to support the Southwestern Community with cooperation from the Center for Academic Success. As such, the restrictions outlined in the Southwestern University Honor Code and the Student handbook apply to any actions you take within the application.
                By logging in you are agreeing that you will not break university Honor Code or Student Handbook Policy.
              </p>
              <Row className="buttonRow">
                <Button href="https://www.southwestern.edu/offices/success/">Click here for more info</Button>
                {isLoading ? (
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                ) : (
                    <Button onClick={login}>Log in with Google</Button>
                  )}
              </Row>
            </Jumbotron>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
