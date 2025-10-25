import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { productApi } from '../api/productApi';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchTerm]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await productApi.getAllProducts();
      setProducts(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch products. Please try again.');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return (
      <div className="products-loading">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="products">
      <div className="products-header">
        <div className="container">
          <h1 className="products-title">Our Products</h1>
          <p className="products-subtitle">
            Discover our amazing collection of shoes
          </p>
          
          <div className="search-container">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search for shoes..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
          </div>
        </div>
      </div>

      <div className="products-content">
        <div className="container">
          {error && (
            <div className="error-message">
              <p>{error}</p>
              <button onClick={fetchProducts} className="retry-btn">
                Try Again
              </button>
            </div>
          )}

          {!error && filteredProducts.length === 0 && searchTerm && (
            <div className="no-results">
              <h3>No products found</h3>
              <p>Try adjusting your search terms</p>
            </div>
          )}

          {!error && filteredProducts.length === 0 && !searchTerm && (
            <div className="no-products">
              <h3>No products available</h3>
              <p>Check back later for new arrivals!</p>
            </div>
          )}

          {!error && filteredProducts.length > 0 && (
            <>
              <div className="products-stats">
                <p>
                  Showing {filteredProducts.length} of {products.length} products
                  {searchTerm && ` for "${searchTerm}"`}
                </p>
              </div>
              
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
