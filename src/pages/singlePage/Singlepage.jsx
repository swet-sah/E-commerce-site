import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../contextapi/Appcontext'
import { Link, useParams } from 'react-router-dom'
import "./Singlepage.css"
import Image from './Image'
import Color from './Color'
import Stars from './Stars'
import Quantity from './Quantity'
import Loading from '../../components/Loading'
import { CartContext } from '../../contextapi/CartContext'



const API = "https://api.pujakaitem.com/api/products"
const Singlepage = () => {
    const { id } = useParams();
    const { getSingleProduct, singleProduct } = useContext(AppContext);
    const { image, colors, price, stars, reviews, company, category, stock, name, description } = singleProduct;
    useEffect(() => {
        getSingleProduct(`${API}?id=${id}`)
    }, [])
    const [color, setColors] = useState("")
       
    useEffect(() => {
        if (colors && colors.length !== 0)
            setColors(colors[0])
    }, [colors])

    const [count, setCount] = useState(1);
    const {addtocart} = useContext(CartContext)
    return (
        <>
            {

                (singleProduct.length == 0) ? (<Loading />) : (
                    <div className='row main-container justify-content-center'>
                        <Image image={image} />
                        <div className="col-6 two-container">
                            <div className='m-3'>
                                <h1> {name}</h1>
                                <hr />
                                <h2><del>price:{price}</del></h2>
                                <h2><small>Price:</small> {price / 2}/-</h2>
                                <p><Stars stars={stars} /></p>
                                <p>Reviewed by {reviews} people</p>
                                <Link>Write a review</Link>
                                <hr />
                                <ul>
                                    <li><strong>Brand: </strong><span>{company}</span></li>
                                    <li><strong>Category: </strong><span>{category}</span></li>
                                    <li><strong>Availability: </strong><span></span>{(stock > 0) ? "In Stock" : "Not available"}</li>
                                </ul>
                                <p>size</p>

                                <div className='my-3'><strong>stock: </strong>{stock}</div>
                                <Color colors={colors} setColors={setColors} />
                                <div>Add to compare</div>
                                <div className='d-flex my-3'><span>Quantity: </span><Quantity stock={stock} count = {count} setCount={setCount} /></div>
                                <Link className='btn btn-dark my-2' to='/mycart' onClick={()=>{
                                    addtocart(id,image,color,count,name,price,stock)
                                }}>Buy it now</Link>
                                <button className='btn btn-dark my-2 mx-2' onClick={() => {
                                   addtocart(id,image, color,count,name,price,stock)
                                }}>Add to cart</button>

                            </div>

                        </div>
                        <div className='desc-container'>
                            <div> <strong>Description:</strong> {description}</div>
                        </div>
                    </div >
                )
            }
        </>
    )
}

export default Singlepage
