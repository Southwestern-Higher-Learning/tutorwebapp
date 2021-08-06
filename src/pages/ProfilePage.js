import React, { useState } from 'react';
import { Row, Form } from 'react-bootstrap';
import { NavigationBar } from '../components/NavigatonBar';

export const ProfilePage = () => {

    const [state] = useState(JSON.parse(localStorage.getItem("user")))
    // console.log(`current state: ${state}`)

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
                    <div className="form">
                        <Form.Control
                            as="textarea"
                            placeholder="Write your bio here"
                            style={{ height: '100px' }}
                        />
                    </div>
                </Row>

            </div>
        </div>
    )
}