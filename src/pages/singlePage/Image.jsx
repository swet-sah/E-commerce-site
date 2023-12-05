import React, { useState } from 'react'


const Image = ({image}) => {
    const [mainImg, setMainImg] = useState(image[0].url);
    const handleimgClick = (url) => {
        setMainImg(url)
    }

    return (
        <>
            <div className="col-6 two-container">

                <div className="big-img" >
                    <img src={mainImg} alt="" className='w-100 img-fluid mx' />
                </div>

                <div className="row  d-flex small-image-container">
                    {image.map((element) => {
                        return (
                            <div className="col-6" key={element.id}>
                                <img src={element.url} alt="..." className='w-100 p-2 ' onClick={() => {
                                    handleimgClick(element.url);
                                }} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Image
