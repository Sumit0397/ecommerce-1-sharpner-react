import React, { useState } from "react";

const AuthContext = React.createContext({
    token: "",
    isLoggedin : false,
    login : (token) => {},
    logout : () => {}
})


export const AuthContextProvider = (props) => {
    const [token , setToken] = useState(null);

    const userLoggedIn = !!token;

    const loginHandler = (tokenId) => {
        setToken(tokenId);
    }

    const logoutHandler = () => {
        setToken(null);
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

