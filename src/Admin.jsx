import React from 'react'
import "./Admin.css"

const Admin = () => {
  return (
    <div className='admin'><div class="registration-box">
    <h1>Administrator</h1>
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" require/>
      </div>
      <div class="form-group">
        <label for="email">Email ID:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required/>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required/>
      </div>
      <div class="form-group">
        <input type="submit" value="sign-in"/>
      </div>
    </form>
  </div></div>
  )
}

export default Admin