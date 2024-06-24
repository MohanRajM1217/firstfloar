
import React from 'react';
import logo from '../assets/icons/almndfooter.png'
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="newsletter">
          <label htmlFor="email">Newsletter</label>
          <img src={logo} alt="" />
          <div className='emailbtn'><input type="email" id="email" placeholder="Enter your email address" required />
          <button type="button">Get Notifications</button></div>
        </div>
        <div className="policies">
          <h5>policies</h5>
          <a href="/almnd-policy">Almnd Policy</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/contact-us">Contact Us</a>
        </div>
        <div className="socials">
          <h5>socials</h5>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
        <div className="contact">
          <h5>contact</h5>
          <p><a href="tel:+916364840327">+91 6364840327</a></p>
          <p><a href="mailto:join@almnd.in">join@almnd.in</a></p>
          <p>2nd Floor, Emirates Arcade, 80 Feet Rd, behind Water Tank, Manchegowdana koppalu, II Stage, Vijayanagar, Mysuru, Karnataka 570017</p>
        </div>
        
      </div>
      <div className="copyright">
        <p>&copy; 2023 First Floor Infotech Private Limited All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;