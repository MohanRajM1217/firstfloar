import React from 'react';
import '../App.css'
const ContactUs = () => {
  return (
    <div className="contact-us"><div className='h2p'>
      <h2>Contact Us</h2>
      <p>
        If you have any inquiries or need further information, please don't hesitate to get in touch.
        Our dedicated team is ready to help you on your path to tech excellence.
      </p></div>
      <div>
      <form>
        <label>
          Name:</label>
          <input type="text" name="name" />
        
        <label>
          Email Address:</label>
          <input type="email" name="email" />
        
        <label>
          Phone Number:</label>
          <input type="tel" name="phone" />
       
        <label>
          Message:</label>
          <textarea name="message"></textarea>
     
        <button type="submit">Submit</button>
      </form></div>
    </div>
  );
};

export default ContactUs;