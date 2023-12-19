import React, { useState } from 'react';

const AddSales = () => {
  const [salesData, setSalesData] = useState({
    productName: '',
    Quantity: '',
    Amount: ''
  });

  const inputHandel = (e) => {
    setSalesData({
      ...salesData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container bg-gray">
      <div className="row justify-content-center w-88">
        <h4 className="pt-3 text-center">ADD SALE ENTRY</h4>
        <form className="col-lg-8 col-md-8 col-sm-10 pb-3">

          {/* Input for Product Name */}
          <div className="form-group mt-2 mb-2">
            <label htmlFor="productName" className="p-1" style={{ fontSize: '14px' }}>Product Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product name"
              name="productName"
              onChange={inputHandel}
              style={{ fontSize: '13px' }} 
            />
          </div>

          {/* Input for Quantity */}
          <div className="form-group mt-3 mb-2">
            <label htmlFor="Quantity" className="p-1" style={{ fontSize: '14px' }}>Quantity</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product Quantity"
              name="Quantity"
              onChange={inputHandel}
              style={{ fontSize: '13px' }} 
            />
          </div>

          {/* Input for Amount */}
          <div className="form-group mt-3 mb-2">
            <label htmlFor="Amount" className="p-1" style={{ fontSize: '14px' }}>Amount</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter product Amount"
              name="Amount"
              onChange={inputHandel}
              style={{ fontSize: '13px' }} // Font size for placeholder
            />
          </div>

          {/* Submit Button */}
          <div className="form-group mt-3 mb-2">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSales;
