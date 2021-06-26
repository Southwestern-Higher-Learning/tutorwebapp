import React from 'react';
import {authProvider} from '../providers/LoginUser'
import { useUser } from '../providers/UserContextProvider'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const HomePage = ()=>{
    const { dispatch } = useUser()
    const [isLoading, setIsLoading] = React.useState(true)

    const flipLoading = ()=>{
        setIsLoading(!isLoading)
    }

    React.useEffect(()=>{
    
    const { searchParams } = new URL(window.location.href);
    const code = searchParams.get('code');

    console.log(searchParams)
    console.log(code)

    if(code){
        console.log("homepage if code")
        authProvider.login({code})
        .then((res)=>{
            dispatch({message: "SET", payload: res})
            
            flipLoading()
        })
        .catch(err => alert(err))
    }

    })

    return isLoading ? (<Spinner></Spinner>) : (
    <div>
        <Link to="/profile">
            <h1>
                Profile
            </h1>
        </Link>
    </div>)
}