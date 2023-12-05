import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
const Stars = ({ stars }) => {
    const numbers = [1, 2, 3, 4, 5]
    return (
        <>
            {
                numbers.map((i) => {
                    if (stars >= i) {
                        return <BsStarFill fill='orange' />
                    }
                    else if (stars >= i - 0.5) {
                        return <BsStarHalf fill='orange' />

                    }
                    else {
                        return <BsStar fill='orange' />
                    }
                })
            }
        </>
    )
}

export default Stars
