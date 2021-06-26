import React from 'react';
import { authProvider } from '../providers/LoginUser'
import { useUser } from '../providers/UserContextProvider'
import { Spinner, Container, Navbar, Nav } from 'react-bootstrap'
import { House, Person } from 'react-bootstrap-icons'

export const HomePage = () => {
    const { state, dispatch } = useUser()
    const [isLoading, setIsLoading] = React.useState(true)

    const flipLoading = () => {
        setIsLoading(!isLoading)
    }

    React.useEffect(() => {

        const { searchParams } = new URL(window.location.href);
        const code = searchParams.get('code');


        if (code) {
            console.log("homepage if code")
            authProvider.login({ code })
                .then((res) => {
                    dispatch({ message: "SET", payload: res })

                    flipLoading()
                })
                .catch(err => alert(err))
        }

    })

    return isLoading ? (<Spinner></Spinner>) : (
        <Navbar>
            <Nav className="navigationBar">
                <Nav.Link>  <House /> </Nav.Link>
                <Nav.Link>Find a Tutor</Nav.Link>
                <Nav.Link><Person /></Nav.Link>
            </Nav>
        </Navbar>


    )
}