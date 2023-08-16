import React, { useContext, useEffect, useReducer } from "react";
import ProductReducer from "../reducer/productRreducer";
import Data from "../components/Data/Data";

const AppContext = React.createContext({});

const {productsArr} = Data;


const initialState = {
    isLoading : false,
    products : [],
    isSingleLoading : false,
    singleProduct : {}
}

const AppProvider = ({children}) => {

    const [state , dispatch] = useReducer(ProductReducer , initialState)

    const getProducts = (data) => {
        dispatch({type:"SET_LOADING"})
        dispatch({type:"SET_DATA" , payload:data})
    }

   
    useEffect(() => {
        getProducts(productsArr)
    } ,[])

    return (
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
}

const useProductContext = () => {
    return useContext(AppContext);
}

export {AppContext , AppProvider , useProductContext};