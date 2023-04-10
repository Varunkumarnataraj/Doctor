import React, { useState } from 'react';
import Axios from 'axios'; 
import '../css/Regis.css';
import { Link } from 'react-router-dom';
// import register from '../img/images/sethescope.jpg';

 
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobileNumber: '',
    age: '',
    gender: '',
    password: '',
    confirmPassword: '',
    address: '',
  });
  const [registerStatus, setregisterStatus] = useState("");
  const [errors, setErrors] = useState("");
 
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
  };
 
  
    const validateForm =(formData) =>{
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = 'Invalid phone number format';
    }
    if (!formData.age.trim()) {
      errors.age = 'Age is required';
    } else if (isNaN(formData.age)) {
      errors.age = 'Age must be a number';
    } else if (formData.age < 18 || formData.age > 120) {
      errors.age = 'Age must be between 18 and 120';
    }
    if (!formData.gender.trim()) {
      errors.gender = 'Gender is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
    }
 
    return errors
  }
  const submit = (e) =>{
    e.preventDefault();
      console.log(formData);
      setErrors(validateForm(formData));
      if(formData.username =="" || formData.email=="" ||formData.mobileNumber=="" ||formData.age=="" 
      ||formData.gender=="" ||formData.password==="" ||formData.confirmPassword==="" ||formData.address=="" )
          alert("fill the details")
      else{
          console.log("if");
       Axios.post("http://localhost:4000/register", {
          username: formData.username,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          age: formData.age,
          gender: formData.gender,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          address: formData.address,
       }).then((response) => {
          if(response.data.statusCode!==200){
              setregisterStatus(response.data.message);
              alert("Successfully Registered");
              window.open("/","_self");
              
          }else{
              setregisterStatus(response.data.message);
              
            
          }}
       )
        }
  
    };

 
  return (
     


    
       
<div className='wholebox'>


   <div className='container-1'>
    <form >
      <div>
        <label htmlFor="username">Username:</label><br></br>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div><br></br>
      <div>
        <label htmlFor="email">Email:</label><br></br>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div><br></br>
      <div>
        <label htmlFor="mobileNumber">Phone Number:</label><br></br>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleInputChange}
        />
        {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
      </div><br></br>
      <div>
        <label htmlFor="age">Age:</label><br></br>
        <input
          type="text"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div><br></br>
      <div>
        <label htmlFor="gender">Gender:</label><br></br>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="" disabled selected hidden>--Select--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div><br></br>
      <div>
        <label htmlFor="password">Password:</label><br></br>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div><br></br>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label><br></br>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div><br></br>
      <div>
        <label htmlFor="address">Address:</label><br></br>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        {errors.address && <span className="error">{errors.address}</span>}
      </div><br></br>
      <button type="submit" onClick={submit}>Sign Up</button>
      
      
 
      <h2 style={{color:'green',fontSize:'15px', textAlign:'center', marginTop:'20px'}}>{registerStatus}</h2>
    </form>
    
    </div>
   </div>
  );
};
 
export default SignUpForm
 
 
 

 
