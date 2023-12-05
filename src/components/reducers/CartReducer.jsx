import React from 'react'

const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_CART_ITEM":
            console.log(state.totalPrice)
            const { id, image, color, count, name, price, stock } = action.payload;
            const uniqueItem = state.cartItem.filter((elem) => {
                return id + color === elem.id
            })
            if (uniqueItem.length !== 0) {
                return (
                    {
                        ...state,
                        count: (count < state.maxItem - state.cartItem.count) ? (state.cartItem.count + count) : (state.cartItem.count)
                    }
                )
            }
            else {
                let arr = {
                    id: id + color,
                    image: image[0].url,
                    color: color,
                    count: count,
                    name,
                    price,
                    stock
                }
                return ({
                    ...state,
                    cartItem: [...state.cartItem, arr],
                    maxItem: stock,
                    totalQuantity:count+state.totalQuantity,
                    totalPrice: parseInt(state.totalPrice)+parseInt(price*count)
                })
            }
        case "REMOVE_ITEM":
            const removedItem = state.cartItem.filter((e) => {
                return e.id != action.payload
            })
            console.log(state.totalPrice)
            return ({
                ...state,
                cartItem: removedItem,
                // totalQuantity:state.totalQuantity-count,
                // totalPrice : state.totalPrice - price*count
            })

    }
}

export default CartReducer
