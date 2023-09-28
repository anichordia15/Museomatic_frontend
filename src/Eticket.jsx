import React from 'react'
import "./Eticket.css"
import home1 from "./images/home1.jpg"

const Eticket = () => {
  return (
    <div className="eticket">
      <img src={home1} alt="" />
      
      <div className='email'>Thank You, Your Ticket is sent to your email</div>
    </div>
  )
}

export default Eticket