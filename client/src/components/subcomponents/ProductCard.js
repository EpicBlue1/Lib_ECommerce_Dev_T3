import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  console.log(props.AllProductData.image);

  const ProductNavigate = useNavigate();

  const indProduct = () => {
    console.log(props.AllProductData);
    ProductNavigate("/IndProduct", {
      state: {
        id: props.AllProductData._id,
        name: props.AllProductData.name,
        img: "http://localhost:2000/images/" + props.AllProductData.image,
        desc: props.AllProductData.description,
        brand: props.AllProductData.brand,
        price:
          props.AllProductData.ProductProperties[0].price -
          props.AllProductData.ProductProperties[0].discount,
        discount: props.AllProductData.ProductProperties[0].discount,
        productCode: props.AllProductData.productCode,
        AllProductData: props.AllProductData,
      },
    });
  };

  const addToCart = () => {
    let user = sessionStorage.getItem("user");

    if (sessionStorage.length === 0) {
      if (window.confirm("Dear Customer, you need to log in first ") === true) {
      }
    } else {
      let cart = sessionStorage.getItem("cart");
      let emptyArray = [];
      console.log(cart);

      if (cart === "" || cart === null) {
        console.log("this one");

        let addCard = {
          name: props.AllProductData.name,
          img: "http://localhost:2000/images/" + props.AllProductData.image,
          price:
            props.AllProductData.ProductProperties[0].price -
            props.AllProductData.ProductProperties[0].discount,
          id: props.AllProductData._id,
          qta: 1,
          orderDone: false,
          user: user,
        };

        emptyArray.push(addCard);

        console.log(emptyArray);

        sessionStorage.setItem("cart", JSON.stringify(emptyArray));

        props.setRender((prev) => !prev);
      } else {
        console.log("no this one");
        let cart = JSON.parse(sessionStorage.getItem("cart"));

        let addCard = {
          name: props.AllProductData.name,
          img: "http://localhost:2000/images/" + props.AllProductData.image,
          price:
            props.AllProductData[0].price - props.AllProductData[0].discount,
          id: props.AllProductData._id,
          qta: 1,
          orderDone: false,
          user: user,
        };

        console.log(cart);

        cart.push(addCard);

        console.log(cart);

        sessionStorage.setItem("cart", JSON.stringify(cart));

        props.setRender((prev) => !prev);
      }
      console.log("All good");
    }
  };

  let URL = "http://localhost:2000/images/" + props.AllProductData.image;

  return (
    <div key={props.key} className="product-card">
      <Row>
        <div
          className="product-image"
          style={{ backgroundImage: `url(${URL})` }}
        >
          <div className="hoverProduct">
            <div onClick={addToCart} className="hoverButt">
              Add to Cart
            </div>
            <div onClick={indProduct} className="hoverButt">
              View
            </div>
          </div>
        </div>
        <Col
          onClick={indProduct}
          className="productText"
          md={{ span: 12, offset: 1 }}
        >
          {props.AllProductData.name}
        </Col>
        <Col className="productText" md={{ span: 12, offset: 1 }}>
          <div className="productTextDiscount">
            {props.AllProductData.ProductProperties[0].discount === 0
              ? ""
              : props.AllProductData.ProductProperties[0].price}
          </div>
          <b>
            R
            {props.AllProductData.ProductProperties[0].price -
              props.AllProductData.ProductProperties[0].discount}
          </b>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCard;
