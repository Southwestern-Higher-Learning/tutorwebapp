import React from 'react';
import { useUser } from '../providers/UserContextProvider';

export const ProfilePage = ()=>{
const {state} = useUser()
console.log(`current state: ${state}`)

return (
    <div>
        <img src={state?.user?.profile_url} alt="profile" />
    </div>
)
}