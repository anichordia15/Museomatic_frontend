import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleEmail =(e)=>{
    setEmail(e.target.value)
  }
  const handlePassword =(e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      email: email,
      password: password
    };


    axios.post('http://localhost:5000/login', requestBody)
      .then(response => {
        
        console.log(response.data); 
        setEmail('')
        setPassword('')
        navigate('/home'); 
      })
      .catch(error => {
        console.error(error); 
      });
  };

  return (
    <div className="email_password">
      <h1>Login</h1>
      <form className='email-form' onSubmit={handleSubmit}>
        <div className='inbox'>
          
        <label htmlFor="email">Email:</label>
        <input
        className='email-form-input'
          type="email"
          id="email"
          value={email}
          onChange={handleEmail}
          placeholder='Enter Email'
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

        <button className='setbtn' type="submit">Login</button>

        </div>
        <h7>New to website create account <a href="/signup"> Sign Up</a></h7> 
      </form>
    </div>
  );
};

export default Login;