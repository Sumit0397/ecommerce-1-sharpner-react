const ProductReducer = (state , action) => {

    if(action.type === "SET_LOADING"){
        return {
            ...state,
            isLoading : true,
        }
    }

    if(action.type === "SET_DATA"){
        let productsData = action.payload;

        return {
            ...state,
            isLoading : false,
            products : productsData
        }
    }
    
    return state;
}

export default ProductReducer;