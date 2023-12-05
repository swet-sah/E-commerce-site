import React, { useContext } from 'react'
import Quantity from '../singlePage/Quantity'
import { CartContext } from '../../contextapi/CartContext'
import { FaTrashAlt } from 'react-icons/fa'
import { BsFillFileMinusFill, BsFillFilePlusFill } from 'react-icons/bs'

const Cart = () => {

  const { cartItem, removeItem,totalPrice} = useContext(CartContext)
  
  return (
    <>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subprice</th>
              <th>Remove</th>

            </tr>
          </thead>
          <tbody>
            {cartItem.map((ele) => (
              <tr key={ele.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <div
                      className="product-image"
                      style={{
                        width: '50px',
                        height: '50px',
                        marginRight: '10px',
                      }}
                    ><img src={ele.image} alt="" className='w-100' /></div>
                    <div>
                      <p className="mb-0">{ele.name}</p>
                      <div
                        className="color-badge"
                        style={{
                          backgroundColor: ele.color,
                          width: '15px',
                          height: '15px',
                          borderRadius: '50%',
                          display: 'inline-block',
                        }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td>{ele.price}</td>
                <td>
                  <div className="d-flex flex-column align-items-center">
                   {
                    ele.count
                   }
                  </div>
                </td>
                <td>
                  {
                    ele.count * ele.price
                  }
                </td>
                <td><FaTrashAlt color='red' onClick={() => {
                  removeItem(ele.id)
                }} /> </td>
              </tr>
            ))}


          </tbody>
        </table>
        <div>
          <p>Total Price:</p>
          <div>{totalPrice}</div>
        </div>
      </div>
    </>

  )
}

export default Cart
