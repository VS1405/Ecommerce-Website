import React, { useState } from 'react'

const AuthContect = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
})

export const AuthContextProvider = (props) => {

    const initiliazeToken = localStorage.getItem('token')
    const [token, setToken] = useState(initiliazeToken)

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token)
        localStorage.setItem('token', token)
    }

    const logoutHandler = () => {
        localStorage.removeItem('token')
        setToken(null)
    }

    // setTimeout(logoutHandler, 60000);
    

    const ContextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContect.Provider value={ContextValue}>
        {props.children}
    </AuthContect.Provider>
}

export default AuthContect;