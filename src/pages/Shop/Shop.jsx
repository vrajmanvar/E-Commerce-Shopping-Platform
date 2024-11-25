import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./Shop.css";
import { GiPartyPopper } from "react-icons/gi";
import { GiPartyFlags } from "react-icons/gi";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <p>
          <GiPartyPopper /> Diwali Offers <GiPartyFlags />
        </p>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
