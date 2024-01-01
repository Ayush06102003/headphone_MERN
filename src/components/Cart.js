import React, { useContext, useEffect } from 'react';
import '../styling/style.css';
import DataContext from '../context/data/dataContext';

function Cart() {
  const { cart, deleteitem, setCart } = useContext(DataContext);

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

  return (
    <div>
      <div className="cart">
        <table>
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
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                  </div>
                </td>
                <td className="quantity">
                  <input type="number" value="1" />
                </td>
                <td className="price">₹{product.price}</td>
                <td className="remove">
                  <i className="fa-solid fa-trash" onClick={() => deleteitem(product._id)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="totalsum">
          <tbody>
            <tr>
              <td>Subtotal :</td>
              <td>123</td>
            </tr>
            <tr>
              <td>Tax :</td>
              <td>123</td>
            </tr>
            <tr>
              <td>To pay :</td>
              <td>123</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
