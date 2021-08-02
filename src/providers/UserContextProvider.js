import React from 'react';
import { authProvider } from './LoginUser'

const UserContext = React.createContext()

export default function ProviderComponent({ children }) {
    const [state, dispatch] = React.useState({})

    const refreshUser = authProvider.RefreshUser

    const providerValue = {
        refreshUser,
        state,
        dispatch
    };
    return <UserContext.Provider value={providerValue}>{children}</UserContext.Provider>
}

export function useUser() {
    return React.useContext(UserContext)
}
