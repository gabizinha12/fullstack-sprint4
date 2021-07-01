import React from "react";

function Product({ description, image, price }) {
  const img = require(`../../${image}`);
  return (
    <li className="products__card">
      <div className="card">
        <img className="card__img" src={img} alt="" />
        <p className="card__description">{description}</p>
        <p className="card__price">R$ {price}</p>
      </div>
    </li>
  );
}

export default Product;
