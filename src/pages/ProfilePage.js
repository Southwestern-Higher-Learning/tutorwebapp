import React, { useState } from 'react';
import { Row, Form, Button, Modal, Card } from 'react-bootstrap';
import { NavigationBar } from '../components/NavigatonBar';
import { UpdateDescription } from '../providers/UpdateAboutMe';

export const ProfilePage = () => {

    const [state] = useState(JSON.parse(localStorage.getItem("user")))
    let [textValue, setTextValue] = useState(state.description)


    const onFormSubmit = async e => {
        e.preventDefault()
        const formData = new FormData(e.target),
            userInput = Object.fromEntries(formData.entries())
        console.log(`form data object: ${userInput.description}`)
        console.log(`state stuff: ${state.description}`)
        const response = await UpdateDescription(userInput.description, localStorage.getItem('access_token'))
        console.log(response)
        if (response) {
            try {
                setTextValue = () => {
                    textValue(userInput.description)
                }
                this.forceUpdate()
            } catch (error) {
                // add better error handling
                console.error()
            }
        }
    }
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="profilePage">
            <NavigationBar></NavigationBar>
            <div className="profileContainer">

                {/* <Row className="welcomeRow">
                    <div className="welcomeText">
                        Welcome to your profile page
                    </div>
                </Row> */}

                <Card className="userCard">

                    <img className="profileImage" src={state?.profile_url} alt="profile" />
                
                    <div className="nameText">{state?.first_name} {state?.last_name}</div>
                
                <Row className="aboutMeRow">
                    <div className="aboutMeDetails">
                        <Card className = "aboutCard">
                            <Card.Title>About</Card.Title>
                            <Card.Body>
                                Your profile is a place to share a little about yourself. If you are a tutor
                                share what you tutor and potential approaches you take when tutoring. If
                                you are a student feel free to share ways that help you learn your major, minor, etc.
                            </Card.Body>
                            <Button varient="primary" className="aboutMeButton" onClick={showModal}> Edit </Button>
                        </Card>
                    </div>


                </Row>


                </Card>

                
        
                <Modal show={isOpen} onHide={hideModal}>
                    <Modal.Header>
                        <Modal.Title>Update Your About Me</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form">
                            <Form onSubmit={onFormSubmit} className='bio-form'>
                                <Form.Control
                                    type="text"
                                    name="description"
                                    as="textarea"
                                    placeholder="Update your about me here"
                                />
                                <Button className='submit-button' variant="primary" type="submit" onClick={hideModal}>Submit</Button>
                            </Form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    )
}