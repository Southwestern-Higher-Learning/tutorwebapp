import React from 'react';
import {authProvider} from '../providers/LoginUser'
import { useUser } from '../providers/UserContextProvider'
import { Spinner, Container } from 'react-bootstrap'

export const HomePage = ()=>{
    const { state, dispatch } = useUser()
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

    return isLoading ? (<Spinner></Spinner>) : (<div>{state.user.profile_url}</div>)
}