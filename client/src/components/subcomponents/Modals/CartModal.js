import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartProduct from "../CartProduct";

const CartModal = (props) => {
  const [checkoutHover, setcheckoutHover] = useState(true);
  const [CartPreview, setCartPreview] = useState("Add Some Products !");
  const [subTotal, setSubTotal] = useState();

  let cart = JSON.parse(sessionStorage.getItem("cart"));

  useEffect(() => {
    if (cart === undefined || cart === null) {
    } else {
      console.log(cart.length);

      let temp = cart.map((item) => (
        <CartProduct
          setRender={props.setRender}
          name={item.name}
          img={item.img}
          price={item.price}
          id={item.id}
          qta={item.qty}
          orderDone={item.orderDone}
          user={item.user}
        />
      ));

      let subTotal = cart.reduce((n, { price }) => n + price, 0);
      console.log(subTotal);

      setSubTotal(subTotal);

      setCartPreview(temp);
    }
  }, [props.Rerender, props.setRender, props.update]);

  const removeProd = (e) => {
    if (cart === undefined || cart === null) {
    } else {
      console.log(cart.length);

      for (let i = 0; i < cart.length; i++) {
        if (props.name === cart[i].name) {
          console.log(props.name + " " + cart[i].name);

          cart.splice(i, 1);

          sessionStorage.setItem("cart", JSON.stringify(cart));

          props.setRender((prev) => !prev);
        }
      }
    }
  };

  return (
    <div
      onMouseEnter={() => props.setShow(true)}
      onMouseLeave={() => props.setShow(false)}
      className={props.Show ? "cart-modal" : "hide"}
    >
      <div className="CartProductsArea">{CartPreview}</div>
      <div className="Subtotal">
        <b>Subtotal: R{subTotal}</b>
      </div>
      <Link className="CheckoutButt" to="/Cart">
        <div className="CheckoutButton">
          <b>Proceed to Check Out</b>
        </div>
      </Link>
    </div>
  );
};

export default CartModal;
