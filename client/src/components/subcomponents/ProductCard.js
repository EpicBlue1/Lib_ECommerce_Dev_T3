import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  console.log(props.AllProductData.image);

  console.log(props);

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
        AllData: props.AllData,
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
      let cartData = JSON.parse(cart);
      let emptyArray = [];
      console.log(cartData.length);

      if (cart === "" || cart === null || cartData.length === 0) {
        console.log("Cart Empty");
        let payload = {
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
          qty: 1,
        };

        cartData.push(payload);
        sessionStorage.setItem("cart", JSON.stringify(cartData));
      } else {
        let payload = {
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
          qty: 1,
        };

        cartData.push(payload);
        sessionStorage.setItem("cart", JSON.stringify(cartData));
      }

      console.log(cartData);
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
