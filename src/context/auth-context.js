import React, { useState } from "react";

const AuthContext = React.createContext({
    token: "",
    isLoggedin : false,
    login : (token) => {},
    logout : () => {}
})


export const AuthContextProvider = (props) => {

    let initialToken = localStorage.getItem('token');
    const [token , setToken] = useState(initialToken);

    const userLoggedIn = !!token;

    const loginHandler = (tokenId) => {
        setToken(tokenId);
        localStorage.setItem('token' , tokenId);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    }


    const contextValue = {
        token : token,
        isLoggedin : userLoggedIn,
        login : loginHandler,
        logout : logoutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext;

