import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Blog = () => {

    
    return (
        <>
            <div className="container">
                <div className="card my-5" style={{ width: "18rem" }}>
                    <img src='/images/blog-1.jpg' className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to='/' className="btn btn-dark">Read More</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
