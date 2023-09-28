import React from 'react'
import "./FeedBack.css"

const Feedback = () => {
  return (
    <div className='feedbackhome'>
<div className="feedback-container">
<div> <h2>Museum Feedback Form</h2>
    <form action="#" method="POST">
      <div class="form-group">
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" required/>
      </div>
      <div class="form-group">
        <label for="email">Email Address:</label>
        <input type="text" id="email" name="email" required/>
      </div>
      <div class="form-group">
        <label for="message">Feedback (Max 300 words):</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <div class="word-count" id="word-count">0 / 300 words</div>
      </div>
      <input type="submit" value="Submit"/>
    </form></div>
</div>
</div>
  )
}

export default Feedback