import React from 'react';
import '../styling/style.css'
import Bestseller from './Bestseller';
import Limited from './Limited';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  return (
  
    <>
   
    
      <section className="left-section">
        <div className="text">
          <h2>Unleash the power of <span>SOUND</span></h2>
          <p>Experience music like never before!</p>
          <button type="button" onClick={() => navigate('allproducts')}>
            Shop Now
          </button>
        </div>
      </section>
      <Bestseller/>
      <Limited/>
    </>
  );
}

export default Home;

