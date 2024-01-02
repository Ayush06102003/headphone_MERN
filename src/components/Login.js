import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/login.css'
import Popup from './Popup';

const Login = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeForm, setActiveForm] = useState('login');
  const [popupText, setPopupText] = useState('');
  const [titlemsg, settitlemsg] = useState('');
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  const { name, email, password } = credentials;
  const response = await fetch(`http://localhost:8000/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  });
  const json = await response.json();
  console.log(json);
  if (json.success){
    localStorage.setItem('token',json.authtoken);
  }
  if (json.message === 'Sorry, user already exists!') {
    // If login is successful, show the popup
    settitlemsg("SORRY")
    setPopupText("Sorry,The user already exists!")
    setShowPopup(true);
    
    setTimeout(() => {
      setShowPopup(false);
      setPopupText(''); 
      
     
    }, 7000);
     
    
  } else {
    // Handle unsuccessful login (optional)
    settitlemsg("THANK YOU")
    setPopupText("You have successfully created an account.")
    setShowPopup(true);


    setTimeout(() => {
      setShowPopup(false);
      setPopupText(''); 
      
     
    }, 7000);
    

    
    
  }
  e.target.reset();

  }
 


  const handleSubmit1 = async (e) => {
    e.preventDefault();
  
    const response = await fetch(`http://localhost:8000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
  
    const json = await response.json();
    console.log(json);
    if (json.success){
        localStorage.setItem('token',json.authtoken);
    
      // If login is successful, show the popup
      settitlemsg("THANK YOU")
      setPopupText("You have successfully logged in.")
      setShowPopup(true);
      
      
      setTimeout(() => {
        setShowPopup(false);
        setPopupText(''); // Clear the popup text
        navigate("/"); // Redirect to the homepage
      }, 2000);
      
    } else {
      // Handle unsuccessful login (optional)
      console.log("Login failed");
      settitlemsg("SORRY")
      setPopupText("Sorry,Incorrect Information!!!Try again")
      setShowPopup(true);
      
      setTimeout(() => {
        setShowPopup(false);
        setPopupText('');
         // Clear the popup text
      }, 7000);
    }
    e.target.reset();
  }
 
 
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const switchForm = (form) => {
    setActiveForm(form);
  };
  const handleClosePopup =()=>{
    setShowPopup(false)
    
  }

  return (
    <>
      <section className="forms-section">
        
        <div className="forms">
          <div className={`form-wrapper ${activeForm === 'login' ? 'is-active' : ''}`}>
            <button
              type="button"
              className="switcher switcher-login"
              onClick={() => switchForm('login')}
            >
              Login
              <span className="underline"></span>
            </button>
            <form  onSubmit={handleSubmit1} className="form form-login">
            
              <fieldset>
              {showPopup && <Popup onClose={handleClosePopup} text={popupText} titlemsg={titlemsg}/>}
                <legend>Please, enter your email and password for login.</legend>
                <div className="input-block">
                  <label htmlFor="login-email">E-mail</label>
                  <input name="email" id="email" onChange={onChange} type="email" required />
                </div>
                <div className="input-block">
                  <label htmlFor="login-password">Password</label>
                  <input id="password" name='password' type="password" onChange={onChange} required />
                </div>
              
              <button type="submit" className="btn-login">
                Login
              </button>
              </fieldset>
            </form>
            
          </div>

          <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active' : ''}`}>
            <button
              type="button"
              className="switcher switcher-signup"
              onClick={() => switchForm('signup')}
            >
              Sign Up
              <span className="underline"></span>
            </button>
            <form  onSubmit={handleSubmit} className="form form-signup">
              <fieldset>
              {showPopup && <Popup onClose={handleClosePopup} text={popupText} titlemsg={titlemsg} />}
                <legend>
                  Please, enter your email, password, and password confirmation for sign up.
                </legend>
                <div className="input-block">
                  <label htmlFor="name">Name</label>
                  <input id="name" name='name'onChange={onChange} type="text" required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-email">E-mail</label>
                  <input id="email" name='email'onChange={onChange} type="email" required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password">Password</label>
                  <input id="password" name="password" onChange={onChange}type="password" required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password-confirm">Confirm password</label>
                  <input id="cpassword" type="password" name='password' onChange={onChange}required />
                </div>
              </fieldset>
              <button type="submit" className="btn-signup">
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Login;
