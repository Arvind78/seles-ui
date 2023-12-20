import React, { useState } from 'react';
import axios from "axios"
import { notification } from 'antd';

const AddSales = () => {
  const [salesData, setSalesData] = useState({
    productName: '',
    quantity: '',
    amount: ''
  });


  const inputHandel = (e) => {
    setSalesData({
      ...salesData,
      [e.target.name]: e.target.value
    });
  };


  const validateSalesData = () => {
    if (salesData.productName.trim() === "") {
      notification.error({
        message: 'Product Name Error',
        description: 'Please enter a valid product name.',
        duration: 2,
        placement: "top"
      });
      return false;
    }
  
    if (salesData.quantity.trim() === "" || isNaN(salesData.quantity)) {
      notification.error({
        message: 'Quantity Field Error',
        description: 'Please enter a valid quantity.',
        duration: 2,
        placement: "top"
      });
      return false;
    }
  
    if (salesData.amount.trim() === "") {
      notification.error({
        message: 'Amount Field Error',
        description: 'Please enter a valid amount.',
        duration: 2,
        placement: "top"
      });
      return false;
    }
  
    return true;
  };
  
 const addSalesHandel= (e)=>{
    e.preventDefault();

    if(!validateSalesData()){
      return false;
    }
  axios.post("http://localhost:8080/api/products",{...salesData}).then((data) => {
    notification.success({
      message: 'Product Add Success',
      description: data.data.message,
      duration: 2,
      placement: "top"
    })
  }).catch((err) => {
    throw err;
  })
  // setSalesData({
  //   productName: '',
  //   quantity: '',
  //   amount: ''
  // });

 }

  return (
    <div className="container bg-gray">
      <div className="row justify-content-center w-88">
        <h4 className="pt-3 text-center">ADD SALE ENTRY</h4>
        <form className="col-lg-8 col-md-8 col-sm-10 pb-3 shadow p-3 mb-5 bg-white rounded" onSubmit={addSalesHandel}>

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
              value={salesData.productName}
            />
          </div>

          {/* Input for Quantity */}
          <div className="form-group mt-3 mb-2">
            <label htmlFor="quantity" className="p-1" style={{ fontSize: '14px' }}>Quantity</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product quantity"
              name="quantity"
              onChange={inputHandel}
              style={{ fontSize: '13px' }} 
              value={salesData.quantity}

            />
          </div>

          {/* Input for Amount */}
          <div className="form-group mt-3 mb-2">
            <label htmlFor="amount" className="p-1" style={{ fontSize: '14px' }}>Amount</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter product amount"
              name="amount"
              onChange={inputHandel}
              style={{ fontSize: '13px' }}
              value={salesData.amount}

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
