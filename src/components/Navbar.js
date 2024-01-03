import React from 'react';
import '../styling/style.css'
import { Link , useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()
  const handlelogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login') 
  }
  return (
    <>
      <div className="hero">
        <nav className="navbar">
          <h2 className="logo">BRO <span>CODE</span> </h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/">Category <i className="fa fa-chevron-circle-down fa-sm"></i></Link>
              <div className="dropmenu">
                <ul>
                  <li><Link to="/wired" >Wired</Link></li>
                  <li><Link to="/wireless" >Wireless</Link></li>
                  <li><Link to="/speaker" >Speakers</Link></li>
                </ul>
              </div>
            </li>
            <li><Link to="/allproducts" >All products</Link></li>
            <li>
              <Link to="/cart" >
                <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: 'rgb(153, 18, 18)' }}></i>
                Cart
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('token')?<Link to="/login"><button type="button" className="navb">Login/Signup</button></Link>
          :<button type="button" onClick={handlelogout} className="navb">Logout</button>}

        </nav>
      </div>
    </>
  );
}

export default Navbar;

