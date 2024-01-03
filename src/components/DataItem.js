import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styling/style.css';
import DataContext from '../context/data/dataContext';

function DataItem(props) {
    const context = useContext(DataContext);
    const {getbyId} = context
    const { item } = props;
    const ImageUrl = `newimages/${item.imgUrl}.png`;
    const navigate = useNavigate()

    const handleClick = () => {
        // Get the current cart from local storage
        const storedCart = localStorage.getItem('cart');
        const currentCart = storedCart ? JSON.parse(storedCart) : [];
      
        // Check if the product is already in the cart
        const isProductInCart = currentCart.some((product) => product._id === item._id);
      
        
        if (isProductInCart) {
          navigate("/cart");
        } else {
          getbyId(item._id);
          navigate('/cart')

        }
      };
      
    return (
        <div>



            <div className="pro1">
                <img src={ImageUrl} alt="speaker" />
                <div className="des">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <span>₹{item.price}<del>₹69</del></span>
                    <div className="star">
                        <i className="fas fa-star"><span>{item.rating}</span></i>
                    </div>
                    <button type="button" onClick={handleClick}>
                        Add to Cart
                    </button>
                </div>
            </div>


        </div>
    )
}

export default DataItem
