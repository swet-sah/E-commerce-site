import React, { useContext } from 'react'
import { FilterContext } from '../../contextapi/FilterContext'

const FilterSelect = () => {
    const {sorting} = useContext(FilterContext);
    return (
        <>
            <form action="#" id='sort' >
                <label className='mx-3'>Sort By:</label>
                <select name="sort" id="sort" className='m-2 p-1 text-start' onClick={(e)=>{sorting(e.target.value)}}>
                    <option value="allproduct">All product</option>
                    <option value="#" disabled></option>
                    <option value="a-z" >a-z</option>
                    <option value="#" disabled></option>
                    <option value="z-a" >z-a</option>
                    <option value="#" disabled></option>
                    <option value="lowest" >price lowest</option>
                    <option value="#" disabled></option>
                    <option value="highest" >price highest</option>

                </select>
            </form>
        </>
    )
}

export default FilterSelect
