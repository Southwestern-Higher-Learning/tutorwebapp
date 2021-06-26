import React from "react";
import { useUser } from "../providers/UserContextProvider";
import { Container, Row, Button, Col, Spinner } from "react-bootstrap"
import { authProvider } from '../providers/LoginUser'
import { withRouter } from "react-router-dom";

export const LoginPage = withRouter(({history}) => {
  const { dispatch } = useUser()
  const [isLoading, setIsLoading] = React.useState(false);

  const login = async ()=>{
    if(localStorage.getItem('refresh_token')){
      setIsLoading(true)
      try {
        const user = await authProvider.RefreshUser(localStorage.getItem('refresh_token'))
        dispatch({message: "SET_USER", payload: user.user})
        setIsLoading(false)
        history.push('/profile')
      } catch (error){
        alert(error)
      }
      
    } else {
      setIsLoading(true)
      authProvider.login({})
      .then(setIsLoading(false))
      .catch(err => alert(err))
    }
      
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
})
