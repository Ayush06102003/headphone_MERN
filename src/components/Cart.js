import React, { useContext, useEffect, useState } from 'react';
import '../styling/style.css';
import DataContext from '../context/data/dataContext';

function Cart() {
  const { cart, deleteitem, setCart } = useContext(DataContext);
  const [quantity, setQuantity] = useState(1);


  const handleQuantityChange = (productId, change) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product._id === productId
          ? { ...product, quantity: Math.max(1, (product.quantity || 1) + change) }
          : product
      )
    );
  };


  // Load cart data from local storage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [setCart]); // Ensure useEffect runs only when setCart changes

  // Save cart data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  


  let subtotal = 0;
  let finalprice =0;
  cart.forEach((product)=> {
    subtotal+= (product.quantity || 1)*(product.price)
    finalprice = ((product.price)*(product.quantity || 1))|| product.price;
    
  });



  return (
    <div>
      <div className="cart">
        <table className='pcart'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product._id}>
                <td>
                  <div className="product-info">
                    <img src={`newimages/${product.imgUrl}.png`} alt="" />
                    <div className='product-info1'><h2>{product.name}</h2>
                      <p>{product.description}</p>
                    </div>
                  </div>
                </td>

                <td className="quantity">
                  <button
                    type="button"className="mbutton"
                    onClick={() => handleQuantityChange(product._id, -1)}>-</button>
                  <input type="number" value={product.quantity || 1}  />

                  <button
                    type="button"className="pbutton"
                    onClick={() => handleQuantityChange(product._id, 1)}>+</button>
                </td>
                {/*  */}
                <td className="price">₹{(product.quantity * parseInt(product.price) || product.price)}</td>

                <td className="remove">
                  <i className="fa-solid fa-trash" onClick={() => deleteitem(product._id)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="totalsum">
          <tbody>
            <th>ORDER SUMMARY</th>
            <tr>
              <td>Subtotal :</td>
              <td>{subtotal}</td>
            </tr>
            <tr>
              <td>Tax :</td>
              <td>0 guys enjoyyy</td>
            </tr>
            <tr>
              <td>To pay :</td>
              <td>{subtotal}</td>
            </tr>
            <button className='checkout' type='button'>Checkout </button>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
