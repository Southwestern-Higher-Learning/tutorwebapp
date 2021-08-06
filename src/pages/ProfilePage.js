import React, { useState } from 'react';
import { NavigationBar } from '../components/NavigatonBar';

export const ProfilePage = () => {

    const [state, setstate] = useState(JSON.parse(localStorage.getItem("user")))
    console.log(`current state: ${state}`)

    return (
        <div>
            <NavigationBar></NavigationBar>
            <img src={state?.profile_url} alt="profile" />
        </div>
    )
}