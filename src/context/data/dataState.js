import React, {useState, useEffect} from 'react'
import DataContext from './dataContext'
function DataState(props) {
  const host = "http://localhost:8000"
  const [data,setData] = useState([])
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  

  const getdata = async () => {
    try {
      const response = await fetch(`${host}/fetchall`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getbyId = async (id) => {
    try {
      const response = await fetch(`${host}/getbyId/${id}`);
      const product = await response.json();
      console.log('Fetched data:', product);
      setCart((prevCart) => [...prevCart, product])
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteitem = (id)=>{
    const updatedcart = cart.filter((item)=>{
      return item._id!==id
    });
  setCart(updatedcart)
  }
      
  return (
    <div>
      <DataContext.Provider value={{data , getdata , getbyId, cart, deleteitem , setCart}} >
        {props.children}
      </DataContext.Provider>
    </div>
  )
}

export default DataState
