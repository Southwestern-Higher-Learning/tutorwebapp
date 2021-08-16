import React, { useState } from 'react';
import { Row, Form, Button, Modal } from 'react-bootstrap';
import { NavigationBar } from '../components/NavigatonBar';
import { UpdateDescription } from '../providers/UpdateAboutMe';

export const ProfilePage = () => {

    const [state] = useState(JSON.parse(localStorage.getItem("user")))
    let [textValue, setTextValue] = useState(state.description)

    //TODO: write a function that saves users input
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
                    textValue = userInput.description
                }
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
        <div>
            <NavigationBar></NavigationBar>
            <div className="profileContainer">
                <Row>
                    <div className="welcomeText">
                        Welcome to your profile page
                    </div>
                </Row>
                <Row>
                    <img className="profileImage" src={state?.profile_url} alt="profile" />
                    <div className="nameText">{state?.first_name} {state?.last_name}</div>
                </Row>
                <Row>
                    {textValue}
                </Row>
                <button onClick={showModal}>Display Modal</button>
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


                            </Form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='submit-button' variant="primary" type="submit">Submit</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    )
}