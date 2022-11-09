import React from "react";

const CartPageProduct = (props) => {
  let URL = props.img;
  console.log(props);

  return (
    <div className="cart-page-product">
      <div
        className="cart-item cart-img"
        style={{ backgroundImage: `url(${URL})` }}
      ></div>
      <div className="cart-item">
        <h5> {props.name}</h5>
      </div>
      <div className="cart-item">
        <h4> R{props.price}</h4>
      </div>
      <div className="cart-item">
        <input
          className="cartPage-input"
          type="number"
          defaultValue={props.qta}
        />
      </div>
      <div className="cart-item">
        <div className=" remove-icon padding-adjustments"></div>
      </div>
    </div>
  );
};

export default CartPageProduct;
