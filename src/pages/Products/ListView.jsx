import React from 'react';
import { Link } from 'react-router-dom';

const ListView = ({ id, image, name, price, description }) => {
  return (
    <div key={id}>
      <Link to={`/singleproduct/${id}`} className='text-black'>
        <div className='row m-3 d-flex justify-content-center align-items-center bg-white' style={{ borderRadius: '1rem' }}>
          <img src={image} alt={name} className='col-4 my-3' />

          <div className='col-8 my-3'>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListView;
