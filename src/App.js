import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Allproducts from './components/Allproducts';
import Cart from './components/Cart';
import DataState from './context/data/dataState';
import Login from './components/Login';
import Alert from './components/Alert';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
    <DataState>
    <BrowserRouter>
      <Navbar/>
      <Alert alert= {alert}/>
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/allproducts' element={<Allproducts category="all" showAlert={showAlert} />}/>
        <Route exact path='/wired' element={<Allproducts category="wired"/>}/>
        <Route exact path='/wireless' element={<Allproducts category="wireless"/>}/>
        <Route exact path='/speaker' element={<Allproducts category="speaker"/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
    </DataState>
      
    </>
  );
}

export default App;
