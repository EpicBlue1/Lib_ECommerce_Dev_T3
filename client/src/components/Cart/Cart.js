import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartProduct from "../subcomponents/CartPageProduct";

const Cart = (props) => {
  const [CartPreview, setCartPreview] = useState("Add Some Products !");
  let cart = JSON.parse(sessionStorage.getItem("cart"));
  const [subTotal, setSubTotal] = useState();

  console.log(cart);

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
  }, [props.Rerender]);

  const checkout = () => {
    let userId = sessionStorage.getItem("id");
    let payload = {
      orders: cart,
      userId: userId,
    };

    axios
      .post("http://localhost:2000/api/addorder", payload)
      .then((res) => {
        // sessionStorage.removeItem("cart");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {props.MainNavBar}
      <Row className="SliderSec">
        <Col className="AllProductSubSec" md={{ span: 12 }}>
          <h1 className="txtGrayDark">
            <b>Cart</b>
          </h1>
          <br></br>
          <p className="txtGrayDark">
            Welcome to your cart; if you've been a long-term customer with us,
            the checkout should be auto-populated.
          </p>
        </Col>
        <Col className="CartConParent" md={12}>
          <div className="CartContainer">
            <Row>
              <Col md={8}>
                <div className="CartProducts">{CartPreview}</div>
                <div className="CartInfo">
                  <div className="ContShopping">
                    <div className="BackIcon"></div>
                    <b>Continue Shopping</b>
                  </div>
                  <p>
                    <b>Subtotal: R{subTotal}</b>
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <div className="UserDetailsCon">
                  <div className="UserDetails">
                    <h1>Details</h1>
                    <div className="CardImage"></div>
                    <h4>Name on Card</h4>
                    <div className="Details"></div>
                    <h4>Name on Card</h4>
                    <div className="Details"></div>
                    <h4>Name on Card</h4>
                    <div className="Details"></div>
                    <h4>Name on Card</h4>
                    <div className="Details"></div>
                    <h4>Name on Card</h4>
                    <div className="Details"></div>
                    <button onClick={checkout} className="Button-Checkout">
                      Checkout
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
