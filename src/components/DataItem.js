import React, { useContext } from 'react'

import '../styling/style.css';
import DataContext from '../context/data/dataContext';

function DataItem(props) {
    const context = useContext(DataContext);
    const {getbyId} = context
    const { item } = props;
    const ImageUrl = `newimages/${item.imgUrl}.png`;


    
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
                    <button type="button" onClick={()=>{getbyId(item._id)}}>
                        Add to Cart
                    </button>
                </div>
            </div>


        </div>
    )
}

export default DataItem
