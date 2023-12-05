import React, { createContext, useContext, useEffect, useReducer } from "react";
import FilterReducer from "../components/reducers/FilterReducer";
import { AppContext } from "./Appcontext";

const FilterContext = createContext();


const FilterProvider = ({ children }) => {
    const { product } = useContext(AppContext);
    
    const initialState = {
        allproduct: product,
        filterProduct: product,
        typetosort:"",
        catetype:"",
        filters:""
    }
    const [state, dispatch] = useReducer(FilterReducer, initialState);
    

    const getFilter = (e)=>{
        dispatch({type:"SET_FILTERS",payload:e})
    }
    useEffect(()=>{
       // console.log("Searching..")
        dispatch({type:"SEARCH_FILTERS",payload:{product:product,input:state.filters}})
    },[state.filters])

    const sortByCategory = (cate)=>{
        dispatch({type:"GET_CATEGORY", payload:cate})
    }
    useEffect(()=>{
        dispatch({type:"CATEGORY_SORT",payload:product})
    },[state.catetype,product])
    const sorting = (e) => {
       dispatch({ type: "GET_SORT_VALUE", payload:e })
    }

    useEffect(() => {
        dispatch({ type: "SORTING", payload:product })
    }, [state.typetosort])

    const clearFilter = ()=>{
        dispatch({type:"CLEAR_FILTER",payload: product});
    }

    return (
        <FilterContext.Provider value={{ ...state, sorting ,sortByCategory,clearFilter,getFilter}}>
            {children}
        </FilterContext.Provider>
    )
}
export { FilterProvider, FilterContext }