import React from "react";
import { useUser } from "../providers/UserContextProvider";
import { Container, Row, Button, Col, Spinner } from "react-bootstrap"
import { authProvider } from '../providers/LoginUser'

export const LoginPage = () => {
  const { dispatch } = useUser();
  const [isLoading, setIsLoading] = React.useState(false);

  const login = ()=>{
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
            {isLoading ? (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              <Button onClick={login}>Log in with Google</Button>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
