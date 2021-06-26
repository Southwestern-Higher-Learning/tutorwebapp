import React from 'react';
import {authProvider} from './LoginUser'

let initialState = {
    user: null,
    access_token: null
}


const UserContext = React.createContext()

const reducer = (state, action) => {
    switch(action.message){
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }
        case "SET_TOKEN":
            return {
                ...state,
                access_token: action.payload
            }
        case "SET":
            return {
                user: action.payload.user,
                access_token: action.payload.access_token
            }
        default:
            return state;
    }
}

export default function ProviderComponent({children}){
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const contextValue = React.useMemo(() => { return {state, dispatch}}, [state, dispatch])

    const refreshUser = authProvider.RefreshUser

    const providerValue = {
        refreshUser,
        state,
        dispatch
    };
    return <UserContext.Provider value={providerValue}>{children}</UserContext.Provider>
}

export function useUser(){
    return React.useContext(UserContext)
}