import React from 'react'
import { Link, Route } from 'react-router-dom'
import Singlepage from '../singlePage/Singlepage'

const GridView = ({ id, image }) => {



    return (
        <>
            <div key={id} className="col d-flex justify-content-center">
                <Link to={`/singleproduct/${id}`}>
                    <div className="card my-2" style={{ width: "12rem" }}>
                        <img className="card-img-top" src={image} alt="Card image cap" style={{ height: '8rem', objectFit: 'cover' }}/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default GridView
