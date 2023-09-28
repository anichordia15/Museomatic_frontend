import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"


const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      name: name,
      email: email,
      phone: phone,
      password: password

    };


    axios.post('http://localhost:5000/signUp', requestBody)
      .then(response => {

        console.log(response.data);
        setName('')
        setEmail('')
        setPhone('')
        setPassword('')
        navigate('/home');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="email_password">
      <h1>Sign Up</h1>
      <form className='email-form' onSubmit={handleSubmit}>

        <div className='inbox'>
          <label htmlFor="name">Name:</label>
          <input
            className='email-form-input'
            type="text"
            id="name"
            value={name}
            onChange={handleName}
            placeholder='Enter Name'
          />


          <label htmlFor="email">Email:</label>
          <input
            className='email-form-input'
            type="email"
            id="email"
            value={email}
            onChange={handleEmail}
            placeholder='Enter Email'
          />


          <label htmlFor="phone">Phone Number:</label>
          <input
            className='email-form-input'
            type="phone"
            id="phone"
            value={phone}
            onChange={handlePhone}
            placeholder='Enter Phone Number'
          />


          <label htmlFor="password">Password:</label>
          <input
            className='email-form-input'
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            placeholder='Enter Password'
          />

          <button className='setbtn' type="submit">SignUp</button>
        </div>
        <h3>Alread have an account<a href="/"> Login</a></h3>
      </form>
    </div>
  );
};

export default SignUp;