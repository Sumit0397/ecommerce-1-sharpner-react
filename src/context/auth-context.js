import React, { useState } from "react";

const AuthContext = React.createContext({
    token: "",
    isLoggedin : false,
    userEmail : "",
    login : (token) => {},
    logout : () => {}
})


export const AuthContextProvider = (props) => {

    let initialToken = localStorage.getItem('token');
    let initialEmail = localStorage.getItem('email');
    const [token , setToken] = useState(initialToken);
    const [userEmail , setUserEmail] = useState(initialEmail);

    const userLoggedIn = !!token;

    const loginHandler = (tokenId,email) => {
        setToken(tokenId);
        setUserEmail(email);
        localStorage.setItem('token' , tokenId);
        localStorage.setItem('email' , email);
    }

    const logoutHandler = () => {
        setToken(null);
        setUserEmail(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    }


    const contextValue = {
        token : token,
        isLoggedin : userLoggedIn,
        userEmail : userEmail,
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

