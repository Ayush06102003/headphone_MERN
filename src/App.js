
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Allproducts from './components/Allproducts';
import Cart from './components/Cart';
import DataState from './context/data/dataState';
function App() {
  return (
    <>
    <DataState>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
       
        <Route exact path='/allproducts' element={<Allproducts category="all"/>}/>
        <Route exact path='/wired' element={<Allproducts category="wired"/>}/>
        <Route exact path='/wireless' element={<Allproducts category="wireless"/>}/>
        <Route exact path='/speaker' element={<Allproducts category="speaker"/>}/>
        <Route exact path='/cart' element={<Cart/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
    </DataState>
      
    </>
  );
}

export default App;
