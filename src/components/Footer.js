// Footer.js

import React from 'react';
import '../styling/style.css'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
    <footer>
      <div className="foot">
        <p className="footer-company-about">
          <span>About the company</span>
          At Avengers Fitness Gym, we are more than just a gym; we are a community of fitness enthusiasts dedicated to helping you achieve your health and wellness goals. Our mission is to empower individuals to lead healthier, happier lives through exercise, nutrition, and a supportive community. Also, we have our second branch in THANE which also provides similar motives towards our members.
        </p>

        <div className="footer-center">
          <h1>Contact us</h1>

          <div className="details">
            <i className="fa fa-map-marker"></i>
            <p>Joshi Lane, Tilak road Pantnagar, Ghatkopar(east)</p>
          </div>

          <div className="details">
            <i className="fa fa-phone"></i>
            <p>+91 7045362152</p>
          </div>

          <div className="details">
            <i className="fa fa-envelope "></i>
            <p><Link to="/">avengers@fitness.com</Link></p>
          </div>
        </div>

        <div className="explore">
          <h1>Explore us</h1>

          <p className="footer-links">
            <Link to="/" className="link-1">Home</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </p>
        </div>
      </div>

      <div className="social">
        <Link to="/"><i className="fa fa-facebook fa-xm" style={{ color: 'white' }}></i></Link>
        <Link to="/"><i className="fa fa-twitter  fa-xm" style={{ color: 'white' }}></i></Link>
        <Link to="/"><i className="fa fa-instagram fa-xm" style={{ color: 'white' }}></i></Link>
        <Link to="/"><i className="fa fa-linkedin fa-xm" style={{ color: 'white' }}></i></Link>
      </div>

      <div className="copyright">
        <p> Copyright © 2020.<span> All Rights Reserved.</span> </p>
      </div>
      </footer>
    </>
  );
}

export default Footer;

