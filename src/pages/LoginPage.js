import React from "react";
import { useUser } from "../providers/UserContextProvider";
import { Container, Row, Button, Col, Spinner, Jumbotron } from "react-bootstrap"
import { authProvider } from '../providers/LoginUser'
import { withRouter } from "react-router-dom";

export const LoginPage = withRouter(({ history }) => {
  const { state, dispatch } = useUser()
  const [isLoading, setIsLoading] = React.useState(false);

  const login = async () => {
    if (localStorage.getItem('refresh_token')) {
      setIsLoading(true)
      try {
        const user = await authProvider.RefreshUser(localStorage.getItem('refresh_token'))
        dispatch(...state, ...user)
        setIsLoading(false)
        history.push('/profile')
      } catch (error) {
        alert(error)
      }

    } else {
      setIsLoading(true)
      authProvider.login({})
        .then(res => {
          dispatch(res);
          setIsLoading(false);
        })
        .catch(err => alert(err))
    }

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
                <Button variant="light" href="https://www.southwestern.edu/offices/success/">Click here for more info</Button>
                {isLoading ? (
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                ) : (
                    <Button onClick={login}>Agree and Log in</Button>
                  )}
              </Row>
            </Jumbotron>
          </Container>
        </Col>
      </Row>
    </Container>
  );
})
