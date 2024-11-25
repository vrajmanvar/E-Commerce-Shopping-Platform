import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
      <button className="details" onClick={() => navigate(`/detail/${id}`)}>
        Details
      </button>
    </div>
  );
};

export default Product;
