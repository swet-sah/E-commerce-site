import React from 'react';
import { Link } from 'react-router-dom';

const GridView = ({ id, image, name, price, description }) => {
  const truncateDescription = (text, length) => {
    if (!text || typeof text !== 'string') return '';
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  };

  return (
    <div key={id} className="col d-flex justify-content-center">
      <Link to={`/singleproduct/${id}`}>
        <div className="card my-2" style={{ width: "12rem" }}>
          <img className="card-img-top" src={image} alt={name} style={{ height: '8rem', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{truncateDescription(description, 50)}</p>
            <p className="card-text">Price: ${price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GridView;
