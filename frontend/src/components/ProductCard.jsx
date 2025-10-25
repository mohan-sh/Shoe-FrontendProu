import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [imageError, setImageError] = useState(false);
  
  // Construct image URL
  const getImageUrl = () => {
    if (imageError) return 'https://via.placeholder.com/300x200?text=No+Image';
    
    if (product.image.startsWith('http')) {
      return product.image;
    }
    
    // Ensure the path starts with /uploads/
    const imagePath = product.image.startsWith('/uploads/') 
      ? product.image 
      : `/uploads/${product.image}`;
    
    return `${process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'}${imagePath}`;
  };

  const imageUrl = getImageUrl();

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={imageUrl} 
          alt={product.name}
          className="product-image"
          onError={() => {
            setImageError(true);
          }}
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <Link to={`/product/${product._id}`} className="view-details-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
