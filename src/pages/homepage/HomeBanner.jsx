import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'rsuite'
import DemoCarousel from './DemoCarousel'
import { AppContext } from '../../contextapi/Appcontext'
import Loading from '../../components/Loading'

const HomeBanner = () => {
  const { product } = useContext(AppContext);
  const [fetchData, setfetchData] = useState([]);

  useEffect(() => {
    setfetchData(product.slice(0,3))
  }, [product])

  return (
    <>
      <Container className="home-wrapper-1 py-5">
        <div >
          <div className='container w-50 d-flex'>
            <DemoCarousel />
          </div>
          <div className="row ">
            {fetchData.length > 0 ? (
              fetchData.map((element) => {
                return (

                  <div key={element.id} className='col-4' >
                    <div className='small-banner-content position-absolute text-white m-3 p-2'>

                      <h3 style={{ color: "#bf4800" }}>{element.name}</h3>
                      <h4>{element.company}</h4>
                      <p >only at -{element.price}/-</p>
                      <Link className='btn btn-dark mx-0 px-4 my-1' >Buy Now</Link>

                    </div>
                    <div className=''>
                      <img src={element.image} alt="" className="img-fluid rounded-3 my-2 w-100" />

                    </div>
                  </div>
                )
              })

            ):(
              <Loading/>
            )
              
            }
          </div>

        </div>

      </Container>

    </>
  )
}

export default HomeBanner
