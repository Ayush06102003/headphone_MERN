import React from 'react';
import '../styling/style.css'
function Limited() {
  return (
    <div>
      <div className="exoffer">
        <div className="row1">
          <img src="images/ex2.png" alt="" />
        </div>
        <div className="row2">
          <p>Exclusive offer: limited edition</p>
          <h1>Bassheads 900</h1>
          <p>
            40mm Drivers Super Extra Bass<br />
            Comfortable & Foldable
          </p>
          <button type="button" className="exb">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Limited;

