import './AddProduct.css';
import { useState } from 'react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: 0,
    discountedPrice: 0,
    stock: 0,
    media: null,
  })

  const adjust = (field, amount) => {
    setFormData(prev => ({
      ...prev,
      [field]: Math.max(0, prev[field] + amount),
    }))
  }

  const handleChange = e => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleFileChange = e => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      media: file,
    }))
    document.getElementById('file-chosen').textContent = file?.name || 'No file chosen'
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const payload = new FormData()

    payload.append('title', formData.title);
    payload.append('description', formData.description);
    payload.append('category', formData.category);
    payload.append('price', formData.price);
    payload.append('discountedPrice', formData.discountedPrice);
    payload.append('stock', formData.stock);
    if (formData.media) {
      payload.append('media', formData.media);
    }
  }

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <div className="form-card">
        <h1 className="form-title">Add New Product</h1>

        <div>
          <label htmlFor="title">Title</label>
          <input id="title" className="input" value={formData.title} onChange={handleChange} placeholder="Product title" />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input id="description" className="input" value={formData.description} onChange={handleChange} placeholder="Product description" />
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <input id="category" className="input" value={formData.category} onChange={handleChange} placeholder="Category" />
        </div>

        <div className="number-input-group">
          <label htmlFor="price">Price</label>
          <div className="custom-number-input">
            <button type="button" className="decrement" onClick={() => adjust("price", -1)}>-</button>
            <input id="price" className="input" type="number" value={formData.price} readOnly />
            <button type="button" className="increment" onClick={() => adjust("price", 1)}>+</button>
          </div>
        </div>

        <div className="number-input-group">
          <label htmlFor="discountedPrice">Discounted Price</label>
          <div className="custom-number-input">
            <button type="button" className="decrement" onClick={() => adjust("discountedPrice", -1)}>-</button>
            <input id="discountedPrice" className="input" type="number" value={formData.discountedPrice} readOnly />
            <button type="button" className="increment" onClick={() => adjust("discountedPrice", 1)}>+</button>
          </div>
        </div>

        <div className="number-input-group">
          <label htmlFor="stock">Stock</label>
          <div className="custom-number-input">
            <button type="button" className="decrement" onClick={() => adjust("stock", -1)}>-</button>
            <input id="stock" className="input" type="number" value={formData.stock} readOnly />
            <button type="button" className="increment" onClick={() => adjust("stock", 1)}>+</button>
          </div>
        </div>

        <div>
          <label htmlFor="media">Media</label>
          <div className="custom-file-upload">
            <label htmlFor="media" className="upload-btn">Choose File</label>
            <span id="file-chosen">No file chosen</span>
            <input type="file" id="media" className="hidden-file" onChange={handleFileChange} />
          </div>
        </div>

        <button className="submit-btn" type="submit">Add Product</button>
      </div>
    </form>
  );
};

export default AddProduct;
