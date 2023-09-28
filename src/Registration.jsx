
import React, { useState } from 'react';
import "./Registration.css"
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import QR from "./images/QR.jpg"


function Registration() {
  const [amount, setAmount] = useState('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contact, setContact] = useState('');
  const [nationality, setNationality] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);
  const [date, setDate] = useState('');
  const [timeslot, setTimeslot] = useState('');
  const [numVisitors, setNumVisitors] = useState(0);
  const [paymentMessage, setPaymentMessage] = useState('')
  const [amountBox, setAmountBox] = useState('')
  const navigate =useNavigate()

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

      // Validate email
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address');
        return;
      }

    const formData = {
      name:name,
      email:email,
      contact:contact,
      nationality : nationality,
      gender:gender,
      age:age,
      date:date,
      timeslot:timeslot,
      numVisitors:numVisitors
    }
    

    try {
      await axios.post('http://localhost:5000/api/registrations', formData);
      // Reset form fields
      setName('');
      setEmail('');
      setContact('');
      setNationality('');
      setGender('male');
      setAge(0);
      setDate('');
      setTimeslot('');
      setNumVisitors(0);
      navigate("/eticket")
      sessionStorage.setItem('email', email)
    } catch (error) {
      console.error(error);
      alert('Error: Internal Server Error');
    }
  };

  const calculateAmount = () => {
    let newAmount = 0;
  
    if (nationality === "indian") {
      if (age < 18) {
        newAmount = numVisitors * 150; // Rs. 150 per child
      } else {
        newAmount = numVisitors * 300; // Rs. 300 per adult
      }
    } else {
      newAmount = numVisitors * 500; // Rs. 500 per foreigner
    }
  
    setAmount(newAmount);
    setAmountBox("Total Amount: Rs. " + newAmount);
    submitPayment();
  };
  

  function submitPayment() {
      setPaymentMessage("Payment Successful");
  }


  return (
    <div className="registration">
      <div className="registration-box">
        <h1>Registration</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} name="name" required />
          </div>

          <div>
            <label htmlFor="email">Email ID:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div>
            <label htmlFor="contact">Contact Number:</label>
            <input type="text" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} name="contact" required />
          </div>

          <div>
            <label htmlFor="nationality">Nationality:</label>
            <select id="nationality" value={nationality} onChange={(e)=>setNationality(e.target.value )} name="nationality" required>
              <option value="indian">Indian</option>
              <option value="foreigner">Foreigner</option>
            </select>
          </div>

          <div>
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={gender} onChange={(e)=>setGender(e.target.value)} name="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" value={age} onChange={(e)=>setAge(e.target.value)} name="age" required />
          </div>

          <div>
            <label htmlFor="date">Visiting Date:</label>
            <input type="date" id="date" value={date} onChange={(e)=>setDate(e.target.value)} name="date" required />
          </div>

          <div>
            <label htmlFor="timeslot">Visiting Time Slot:</label>
            <select id="timeslot" value={timeslot} onChange={(e)=>setTimeslot(e.target.value)} name="timeslot" required>
              <option value="10am-1pm">10am to 1pm</option>
              <option value="1pm-4pm">1pm to 4pm</option>
              <option value="4pm-6pm">4pm to 6pm</option>
            </select>
          </div>

          <div>
            <label htmlFor="numVisitors">Total Number of Visitors:</label>
            <input type="number" id="numVisitors" value={numVisitors} onChange={(e)=>setNumVisitors(e.target.value)} name="numVisitors" required />
          </div>

          <div className="amount-box" value={amountBox} onChange={(e)=>setAmountBox(e.target.value)} id="amountBox">
            {amount && <p>Total Amount: Rs. {amount}</p>}
          </div>

          <div id="qrCode">
            <img src={QR} alt="GPay QR Code" width="100" height="100" />
          </div>

         <button type="submit" onClick={calculateAmount}>
           Calculate Amount
          </button>

          

          <div id="paymentMessage">{paymentMessage}</div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
