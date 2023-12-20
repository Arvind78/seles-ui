import React, { useState } from 'react';
import { notification } from 'antd';
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Login = () => {
  const nevigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handelLogin = (e) => {
    e.preventDefault();
    if (formData.email.trim() === "") {
      notification.error({
        message: 'Email Field Error',
        description: 'Email is required.',
        duration: 2,
        placement: "top"
      });
      return false;
    }
  
    if (formData.password === "") {
      notification.error({
        message: 'Password Field Error',
        description: 'Password is required.',
        duration: 2,
        placement: "top"
      });
      return false;
    }

    axios.post("http://localhost:8080/api/login",{...formData}).then((data) => {
      localStorage.setItem("selesToken", data.data.token)
      notification.success({
        message: 'User Login Success',
        description: data.data.message,
        duration: 2,
        placement: "top"
      })
      
    }).catch((err) => {
      notification.error({
        message: 'User Login Error',
        description: err.response.data.message,
        duration: 2,
        placement: "top"
      })
    })

    setFormData({
      email:"",
      password:""
    })
    setTimeout(()=>nevigate("/"),2000)
    
    

  }
  return (
    <div className="container bg-gray">
      <div className="row justify-content-center">
        <h4 className="pt-3 text-center">LOGIN FORM</h4>
        <form className="col-lg-8 col-md-10 col-sm-10 pb-3 shadow p-3 mb-5 bg-white rounded" onSubmit={handelLogin} >
          <div className="form-group mt-0 mb-2">
            <label htmlFor="email" className="p-1" style={{ fontSize: '14px' }}>Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              style={{ fontSize: '13px' }}
            

            />
          </div>

          <div className="form-group mt-3 mb-2">
            <label htmlFor="password" className="p-1" style={{ fontSize: '14px' }}>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
              style={{ fontSize: '13px' }}
            />
          </div>

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

export default Login;
