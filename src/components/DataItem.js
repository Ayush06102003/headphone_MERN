import React from 'react'

import '../styling/style.css';
function DataItem(props) {

    const { item } = props;
    const ImageUrl = `newimages/${item.imgUrl}.png`;
    console.log(ImageUrl)
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
                    <button type="button">
                        Buy Now
                    </button>
                </div>
            </div>


        </div>
    )
}

export default DataItem
