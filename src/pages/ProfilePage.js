import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Row, Form, Button, Modal, Card } from 'react-bootstrap';
import { NavigationBar } from '../components/NavigatonBar';
import { UpdateDescription } from '../providers/UpdateAboutMe';

export const ProfilePage = () => {

    const [state] = useState(JSON.parse(localStorage.getItem("user")))
    let [textValue, setTextValue] = useState(state?.description)


    const onFormSubmit = async e => {
        e.preventDefault()
        const formData = new FormData(e.target),
            userInput = Object.fromEntries(formData.entries())
        const response = await UpdateDescription(userInput.description, localStorage.getItem('access_token'))
        if (response) {
            setTextValue(userInput?.description);
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
                <Row className="welcomeRow">
                    <div className="welcomeText">
                        Welcome to your profile page
                    </div>
                    <div className="aboutMeDetails">
                        <Card>
                            <Card.Body>
                                Your profile is a place to share a little about yourself. If you are a tutor
                                share what you tutor and potential approaches you take when tutoring. If
                                you are a student feel free to share ways that help you learn your major, minor, etc.
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row className="imageRow">
                    <img className="profileImage" src={state?.profile_url} alt="profile" />
                </Row>
                <Row className="aboutRow">
                    <div className="nameText">{state?.first_name} {state?.last_name}</div>
                </Row>
                <button className="aboutMeButton" onClick={showModal}> Edit your About me</button>
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
                                    style={{ height: '100px', width: '600px' }}
                                />
                                <Button className='submit-button' variant="primary" type="submit" onClick={hideModal}>Submit</Button>
                            </Form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
            <div className="bio">
                {state?.description}
            </div>
        </div>
    )
}