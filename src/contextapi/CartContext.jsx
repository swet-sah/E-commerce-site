import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import CartReducer from '../components/reducers/CartReducer'
import AddtoCart from '../pages/Cart/AddtoCart';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const initialState = {
        cartItem: JSON.parse(localStorage.getItem('cartItem')),
        maxItem: "",
        shipping: "500",
        totalPrice: "",
        totalQuantity: ""

    }

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addtocart = (id, image, color, count, name, price, stock) => {
        dispatch({ type: "ADD_CART_ITEM", payload: { id, image, color, count, name, price, stock } })
    }

    const removeItem = (id) => {
        console.log(id)
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    useEffect(() => {
        localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
    }, [state.cartItem])

    
    return (
        <CartContext.Provider value={{ ...state, addtocart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }