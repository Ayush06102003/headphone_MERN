
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Wired from './components/Wired';
import Wireless from './components/Wireless';
import Speaker from './components/Speaker';
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
        <Route exact path='/wired' element={<Wired/>}/>
        <Route exact path='/wireless' element={<Wireless/>}/>
        <Route exact path='/speaker' element={<Speaker/>}/>
        <Route exact path='/allproducts' element={<Allproducts/>}/>
        <Route exact path='/cart' element={<Cart/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
    </DataState>
      
    </>
  );
}

export default App;
