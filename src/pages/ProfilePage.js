import React from 'react';
import { NavigationBar } from '../components/NavigatonBar';
import { useUser } from '../providers/UserContextProvider';

export const ProfilePage = (props) => {
    const { state } = useUser()
    console.log(props);
    console.log(`current state: ${state}`)

    return (
        <div>
            <NavigationBar></NavigationBar>
            <img src={state?.user?.profile_url} alt="profile" />
        </div>
    )
}