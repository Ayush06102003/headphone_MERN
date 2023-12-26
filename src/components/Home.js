import React from 'react';
import '../styling/style.css'
import Bestseller from './Bestseller';
import Limited from './Limited';
function Home() {
  return (
    <>
    
      <section className="left-section">
        <div className="text">
          <h2>Unleash the power of <span>SOUND</span></h2>
          <p>Experience music like never before!</p>
          <button type="button" onClick={() => window.open('allproducts.html', '_blank')}>
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

