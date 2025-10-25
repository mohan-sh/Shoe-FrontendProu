import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productApi } from '../api/productApi';
import './AddProduct.css';

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.description || !formData.image) {
      setError('All fields are required');
      return;
    }

    try {
      setLoading(true);
      setError('');
      
      await productApi.createProduct(formData);
      
      // Reset form
      setFormData({
        name: '',
        price: '',
        description: '',
        image: null
      });
      setPreview('');
      
      // Navigate to products page
      navigate('/products');
    } catch (err) {
      setError(err.message || 'Failed to create product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product">
      <div className="add-product-header">
        <div className="container">
          <h1 className="add-product-title">Add New Product</h1>
          <p className="add-product-subtitle">
            Add a new shoe to our collection
          </p>
        </div>
      </div>

      <div className="add-product-content">
        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit} className="product-form">
              {error && (
                <div className="error-message">
                  <p>{error}</p>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Product Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter product name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="price" className="form-label">
                  Price *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter price"
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Enter product description"
                  rows="4"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="image" className="form-label">
                  Product Image *
                </label>
                <div className="image-upload">
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="file-input"
                    required
                  />
                  <label htmlFor="image" className="file-label">
                    <span className="file-icon">📷</span>
                    <span className="file-text">
                      {formData.image ? 'Change Image' : 'Choose Image'}
                    </span>
                  </label>
                </div>
                
                {preview && (
                  <div className="image-preview">
                    <img src={preview} alt="Preview" className="preview-image" />
                  </div>
                )}
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  onClick={() => navigate('/products')}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Adding Product...' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
