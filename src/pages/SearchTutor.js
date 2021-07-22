import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap'
import { NavigationBar } from '../components/NavigatonBar'
import { Search } from 'react-bootstrap-icons'


export const SearchTutor = () => {
    return (
        <Container>
            <NavigationBar></NavigationBar>
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Search for a Tutor</Form.Label>
                            <Form.Control type="email" placeholder='Search for a tutor by name or subject' />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Search
  </Button>
                    </Form>
                </Card.Body>
                {/* TODO WORK ON QUERY TO BACK END FOR TUTOR INFO */}
                <div>tbd how the tutors will be organized</div>
            </Card>
        </Container>
    )
}