import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { Fetching_Error, Fetching_Start, Fetching_Success } from '../State/ActionType/ActionType';
import { initialState, productReducer } from '../State/StateDeclare/StateDeclare';



export const ProductContext = createContext();

const ProductReducer = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState)

    useEffect(() => {
        dispatch({ type: Fetching_Start })
        fetch('https://real-state-server.vercel.app/allCategories')
            .then(res => res.json())
            .then(data => dispatch({ type: Fetching_Success, payLoad: data }))
            .catch(err => {
                dispatch({ type: Fetching_Error })
            })
    }, [])

    const info = { state, dispatch }
    return (
        <ProductContext.Provider value={info}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => {
    const context = useContext(ProductContext)

    return context
}

export default ProductReducer;