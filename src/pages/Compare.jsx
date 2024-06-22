import React, { useState } from 'react';

const Compare = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddToComparison = (productId) => {
    if (!selectedProducts.includes(productId)) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Compare Products</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <button onClick={() => handleAddToComparison(1)} style={selectedProducts.includes(1) ? { backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px' } : { padding: '10px 20px', borderRadius: '5px' }}>Product 1</button>
        <button onClick={() => handleAddToComparison(2)} style={selectedProducts.includes(2) ? { backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px', marginLeft: '10px' } : { padding: '10px 20px', borderRadius: '5px', marginLeft: '10px' }}>Product 2</button>
        <button onClick={() => handleAddToComparison(3)} style={selectedProducts.includes(3) ? { backgroundColor: 'green', color: 'white', padding: '10px 20px', borderRadius: '5px', marginLeft: '10px' } : { padding: '10px 20px', borderRadius: '5px', marginLeft: '10px' }}>Product 3</button>
      </div>
      <div style={{ textAlign: 'center' }}>
        {selectedProducts.length > 0 && (
          <div>
            <h3 style={{ marginBottom: '10px' }}>Selected Products for Comparison:</h3>
            <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
              {selectedProducts.map(productId => (
                <li key={productId} style={{ marginBottom: '5px' }}>Product {productId}</li>
              ))}
            </ul>
          </div>
        )}
        {!selectedProducts.length && (
          <p style={{ fontStyle: 'italic' }}>Please select products to compare</p>
        )}
      </div>
    </div>
  );
};

export default Compare;
