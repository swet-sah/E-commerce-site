import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='d-grid' style={{placeItems:"center" }}>
            <h1>Error, 404</h1>
            <Link className='btn btn-dark' to='/'>Home</Link>
        </div>
    )
}

export default Error
