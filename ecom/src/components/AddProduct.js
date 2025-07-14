import './AddProduct.css';
import { useState } from 'react';


const AddProduct = () => {

    const [discountedPrice, setDiscountedPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);

    const adjust = (field, amount) => {
        if (field === "discountedPrice") setDiscountedPrice(prev => Math.max(0, prev + amount));
        if (field === "price") setPrice(prev => Math.max(0, prev + amount));
        if (field === "stock") setStock(prev => Math.max(0, prev + amount));
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
                <button className="decrement" onClick={() => adjust("price", -1)}>-</button>
                <input id="price" className="input" type="number" value={price} readOnly />
                <button className="increment" onClick={() => adjust("price", 1)}>+</button>
            </div>
        </div>



        <div className="number-input-group">
            <label htmlFor="discountedPrice">Discounted Price</label>
            <div className="custom-number-input">
                <button className="decrement" onClick={() => adjust("discountedPrice", -1)}>-</button>
                <input id="discountedPrice" className="input" type="number" value={discountedPrice} readOnly />
                <button className="increment" onClick={() => adjust("discountedPrice", 1)}>+</button>
            </div>
        </div>



        <div className="number-input-group">
            <label htmlFor="stock">stock</label>
            <div className="custom-number-input">
                <button className="decrement" onClick={() => adjust("stock", -1)}>-</button>
                <input id="stock" className="input" type="number" value={stock} readOnly />
                <button className="increment" onClick={() => adjust("stock", 1)}>+</button>
            </div>
        </div>


        <div>
            <label htmlFor="media">Media</label>
            <div className="custom-file-upload">
            <label htmlFor="media" className="upload-btn">Choose File</label>
            <span id="file-chosen">No file chosen</span>
            <input type="file" id="media" className="hidden-file" onChange={(e) => {
                document.getElementById('file-chosen').textContent = e.target.files[0]?.name || 'No file chosen';
            }} />
</div>


        </div>


        <button className="submit-btn">Add Product</button>
      </div>
    </div>
  );
};

export default AddProduct;