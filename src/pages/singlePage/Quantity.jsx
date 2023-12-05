import React, { useState } from 'react'
import { BsFillFileMinusFill, BsFillFilePlusFill } from 'react-icons/bs'
const Quantity = ({ stock ,count,setCount}) => {
    const incQuantity = () => {
        if (count < stock) {
            setCount(count + 1);
        }
        else {
            alert(`Only ${stock}  items are there`);
        }
    }
    const decQuantity = () => {
        if (count >1) {
            setCount(count - 1);
        }
        else {
            alert(`Buy atleast 1 item`);
        }
    }
    return (
        <>
            <div className='d-flex mx-3 '>
                <BsFillFileMinusFill size={"1.7rem"} color='#070770' onClick={() => {decQuantity() }} />
                <div className='mx-5'>
                    {
                        count
                    }
                </div>
                <BsFillFilePlusFill size={"1.7rem"} color='#070770' onClick={() => { incQuantity()}} />

            </div>
        </>
    )
}

export default Quantity
