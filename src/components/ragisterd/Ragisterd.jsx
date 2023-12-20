import React, { useState } from "react";
import axios from "axios"
import { notification } from 'antd';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

    

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const validetion = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (formData.firstName.trim() === "" || formData.firstName === null) {
      notification.error({
        message: 'Error',
        description: 'Please provide a valid first name.',
        duration: 2,
        placement: "top"
      });
      return false;
    }
  
    if (formData.lastName.trim() === "" || formData.lastName === null) {
      notification.error({
        message: 'Error',
        description: 'Please provide a valid last name.',
        duration: 2,
        placement: "top"
      });
      return false;
    }
  
    if (formData.email.trim() === "" || formData.email === null || !emailRegex.test(formData.email)) {
      notification.error({
        message: 'Error',
        description: 'Please provide a valid email address.',
        duration: 2,
        placement: "top"
      });
      return false;
    }
  
    if (formData.password.trim() === "" || formData.password === null) {
      notification.error({
        message: 'Error',
        description: 'Please provide a password.',
        duration: 2,
        placement: "top"
      });
      return false;
    }
  
    if (formData.password.length !== 8) {
      notification.error({
        message: 'Error',
        description: 'Password should be 8 characters long.',
        duration: 2,
        placement: "top"
      });
      return false;
    }
  
    return true;
  }


const ragistrationHandel = (e)=>{
   e.preventDefault();
   if(!validetion()){
    return false;
   }
   axios.post("http://localhost:8080/api/registration",{...formData}).then((data) => {
    notification.success({
      message: 'User Ragistration Success',
      description: data.data.message,
      duration: 2,
      placement: "top"
    })
  }).catch((err) => {
    notification.error({
      message: 'User Ragistration Error',
      description: err.response.data.message,
      duration: 2,
      placement: "top"
    })
  })

  setFormData({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
};

  return (
    <div className="container bg-gray">
      <div className="row justify-content-center w-88">
        <h4 className="pt-3 text-center">REGISTRATION FORM</h4>
        <form className="col-lg-8 col-md-8 col-sm-10 pb-3 shadow p-3 mb-5 bg-white rounded" onSubmit={ragistrationHandel}>
          <div className="form-group mt-1 mb-2">
            <label htmlFor="firstName" className="p-1" style={{ fontSize: '14px' }}>First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              style={{ fontSize: '13px' }}
            />
          </div>

          <div className="form-group mt-3 mb-2">
            <label htmlFor="lastName" className="p-1" style={{ fontSize: '14px' }}>Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              style={{ fontSize: '13px' }}
            />
          </div>

          <div className="form-group mt-3 mb-2">
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
}

export default RegistrationForm;
