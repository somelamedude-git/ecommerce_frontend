import React, { useState } from 'react';
import '../styles/AddProduct.css';

const AddProduct = () => {
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const [sizes, setSizes] = useState([]);
  const [sizeInput, setSizeInput] = useState('');
  const [sizeStockInput, setSizeStockInput] = useState(0);

  const [currentColor, setCurrentColor] = useState('');
  const [colors, setColors] = useState([]);

  const addSize = () => {
    if (sizeInput && sizeStockInput > 0) {
      setSizes([...sizes, { size: sizeInput, stock: sizeStockInput }]);
      setSizeInput('');
      setSizeStockInput(0);
    }
  };

  const removeSize = (sizeToRemove) => {
    setSizes(sizes.filter(s => s.size !== sizeToRemove));
  };

  const addColor = () => {
    if (currentColor && !colors.includes(currentColor)) {
      setColors([...colors, currentColor]);
      setCurrentColor('');
    }
  };

  const removeColor = (colorToRemove) => {
    setColors(colors.filter(c => c !== colorToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', document.getElementById('title').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('category', document.getElementById('category').value);
    formData.append('price', price);
    formData.append('discountedPrice', discountedPrice);
    formData.append('stock', stock);
    formData.append('sizes', JSON.stringify(sizes));
    formData.append('colors', JSON.stringify(colors));

    const fileInput = document.getElementById('media');
    if (fileInput.files[0]) {
      formData.append('media', fileInput.files[0]);
    }

    console.log('📦 FormData Preview:');
    for (let pair of formData.entries()) {
      console.log(pair[0], ':', pair[1]);
    }

    // TODO: send to backend using axios/fetch if needed
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h1 className="form-title">Add New Product</h1>

        <div>
          <label htmlFor="title">Title</label>
          <input id="title" className="input" placeholder="Product title" />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input id="description" className="input" placeholder="Product description" />
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <input id="category" className="input" placeholder="Category" />
        </div>

        <div className="number-input-group">
          <label htmlFor="price">Price</label>
          <div className="custom-number-input">
            <button className="round-btn" onClick={() => setPrice(prev => Math.max(0, prev - 1))}>−</button>
            <input
              id="price"
              className="number-field"
              type="number"
              value={price}
              onChange={(e) => setPrice(Math.max(0, parseInt(e.target.value) || 0))}
            />
            <button className="round-btn" onClick={() => setPrice(prev => prev + 1)}>+</button>
          </div>
        </div>

        <div className="number-input-group">
          <label htmlFor="discountedPrice">Discounted Price</label>
          <div className="custom-number-input">
            <button className="round-btn" onClick={() => setDiscountedPrice(prev => Math.max(0, prev - 1))}>−</button>
            <input
              id="discountedPrice"
              className="number-field"
              type="number"
              value={discountedPrice}
              onChange={(e) => setDiscountedPrice(Math.max(0, parseInt(e.target.value) || 0))}
            />
            <button className="round-btn" onClick={() => setDiscountedPrice(prev => prev + 1)}>+</button>
          </div>
        </div>

        <div className="number-input-group">
          <label htmlFor="stock">Stock</label>
          <div className="custom-number-input">
            <button className="round-btn" onClick={() => setStock(prev => Math.max(0, prev - 1))}>−</button>
            <input
              id="stock"
              className="number-field"
              type="number"
              value={stock}
              onChange={(e) => setStock(Math.max(0, parseInt(e.target.value) || 0))}
            />
            <button className="round-btn" onClick={() => setStock(prev => prev + 1)}>+</button>
          </div>
        </div>

        <div>
          <label>Sizes & Stock</label>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              className="input"
              placeholder="Size (e.g. S, M, L)"
              value={sizeInput}
              onChange={(e) => setSizeInput(e.target.value)}
            />
            <input
              className="input"
              type="number"
              placeholder="Stock"
              value={sizeStockInput}
              onChange={(e) => setSizeStockInput(parseInt(e.target.value) || 0)}
            />
            <button className="add-btn" onClick={addSize}>Add Size</button>
          </div>
          <ul>
            {sizes.map(({ size, stock }) => (
              <li key={size}>
                {size} - {stock} units
                <button onClick={() => removeSize(size)} className="remove-btn">Remove</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <label htmlFor="colorInput">Colors</label>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input
              id="colorInput"
              className="input"
              type="text"
              placeholder="e.g. red, #ff0000, rgb(0,0,0)"
              value={currentColor}
              onChange={(e) => setCurrentColor(e.target.value)}
            />
            <button className="add-btn" onClick={addColor}>Add Color</button>
          </div>

          <div className="color-preview" style={{ display: 'flex', marginTop: '0.5rem' }}>
            {colors.map((color, idx) => (
              <div
                key={idx}
                className="color-box"
                style={{
                  backgroundColor: color,
                  width: '30px',
                  height: '30px',
                  border: '1px solid #fff',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginRight: '8px'
                }}
                onClick={() => removeColor(color)}
                title={`Click to remove ${color}`}
              />
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="media">Media</label>
          <div className="custom-file-upload">
            <label htmlFor="media" className="upload-btn">Choose File</label>
            <span id="file-chosen">No file chosen</span>
            <input
              type="file"
              id="media"
              className="hidden-file"
              onChange={(e) => {
                document.getElementById('file-chosen').textContent = e.target.files[0]?.name || 'No file chosen';
              }}
            />
          </div>
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
