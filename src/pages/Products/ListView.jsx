import React from 'react'
import { Link } from 'react-router-dom'

const ListView = ({ id, image }) => {
    return (
        <>
            <div key={id}>
                <Link to={`/singleproduct/${id}`} className='text-black'>
                    <div className='row m-3 d-flex justify-content-center align-items-center bg-white ' style={{ borderRadius: "1rem" }}>
                        <img src={image} alt="" className='col-4 my-3 ' />

                        <div className='col-8 my-3'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum deleniti ad eius ratione perspiciatis aliquid voluptate delectus, placeat </p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ListView
