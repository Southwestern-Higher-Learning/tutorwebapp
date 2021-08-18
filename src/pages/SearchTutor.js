import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap'
import { NavigationBar } from '../components/NavigatonBar'
import { TutorQuery } from '../providers/SearchTutor';




export const SearchTutor = () => {
    const [state] = useState(JSON.parse(localStorage.getItem("user")))

    const onFormSubmit = async e => {
        e.preventDefault()
        const formData = new FormData(e.target),
            userInput = Object.fromEntries(formData.entries())
        console.log(userInput.tutor)
        TutorQuery({ isName: true, param: `${userInput}`, token: `${localStorage.getItem("access_token")}` })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));

    }



    return (
        <Container>
            <NavigationBar></NavigationBar>
            <Card>
                <Card.Body>
                    <Form onSubmit={onFormSubmit}>
                        <Form.Group>
                            <Form.Label>Search for a Tutor</Form.Label>
                            <Form.Control type="text"
                                name="tutor"
                                placeholder="Search for a tutor"
                                style={{ height: '100px', width: '600px' }} />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
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