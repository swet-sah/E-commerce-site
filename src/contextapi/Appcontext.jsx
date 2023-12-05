import axios from 'axios';
import React, { createContext, useEffect, useReducer, useState } from 'react'
import CarouselReducer from '../components/reducers/CarouselReducer';

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products"

const AppProvider = ({ children }) => {

  const initialState = {
    isLoading: false,
    isError: false,
    product: [],
    featuredProduct: [],
    isSingleLoading: false,
    singleProduct: []

  }

  const [state, dispatch] = useReducer(CarouselReducer, initialState);

  useEffect(() => {
    dispatch({ type: "IS_LOADING" })
    axios.get(API)
      .then(res => {
        dispatch({ type: "API_ALL_DATA", payload: res.data })
      })
      .catch(error => {
        dispatch({
          type: "ERROR_IN_DATA"
        })
      })
  }, [])
  const getSingleProduct = async (url) => {
    dispatch({ type: "IS_SINGLE_LOADING" })
    const response = await axios.get(url)
    dispatch({ type: "SINGLE_PRODUCT_DATA", payload: response.data })
  }

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  )
}
export { AppContext, AppProvider };
