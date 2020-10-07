/* eslint-disable no-unused-vars */
import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating ,hideButton}) {

    const [{ basket }, dispatch] = useStateValue();
    console.log(id, title, image, price, rating);
    const removeFrombasket = () => {
        //remove item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
        
    };
    return (
      <div className="checkoutProduct">
        <img className="checkoutproduct_image" src={image} alt="" />

        <div className="checkoutproduct_info">
          <p className="checkoutproduct_title">{title}</p>
          <p className="checkoutproduct_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutproduct_rating">
            {Array(rating)
              .fill()
              .map((_) => (
                // eslint-disable-next-line jsx-a11y/accessible-emoji
                <p>&#11088;</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFrombasket}>Remove from basket</button>
          )}
       
        </div>
      </div>
    );
}

export default CheckoutProduct
