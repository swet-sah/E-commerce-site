import React, { useContext, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { AppContext } from '../../contextapi/Appcontext';

const DemoCarousel = () => {
    const { featuredProduct } = useContext(AppContext);
    return (
        <Carousel>
            {
                featuredProduct.length > 0 ? (featuredProduct.map((element) => {
                    return (
                        <div key={element.id} className='w-100'>
                            <div className="main-banner-content text-white position-absolute text-start mx-3 my-5 ">
                                <h4>{element.name}</h4>
                                <h3>{element.company}</h3>
                                <p>{element.description.slice(0, 100)}...</p>
                                <Link className='btn btn-success mx-0 px-4 my-1' to={`singleproduct/${element.id}`}>Buy Now</Link>
                            </div>
                            <img src={element.image} alt="banner.." />
                        </div>
                    )

                })):(<p></p>)
            }
        </Carousel>
    );

};

export default DemoCarousel;