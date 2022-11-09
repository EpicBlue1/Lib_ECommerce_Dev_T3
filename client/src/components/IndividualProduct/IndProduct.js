import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const IndProduct = (props) => {
  const location = useLocation();

  const Navigate = useNavigate();
  const [variants, setVariants] = useState();
  const [AllProductData, setAllProductData] = useState([]);

  const [VarientName, setVarientName] = useState();
  const [VarientImage, setVarientImage] = useState();
  const [VarientDiscount, setVarientDiscount] = useState();
  const [VarientType, setVarientType] = useState();
  const [VarientAvail, setVarientAvail] = useState();
  const [VarientId, setVarientId] = useState();

  useEffect(() => {
    setVarientName(location.state.AllProductData.name);
    setVarientImage(
      "http://localhost:2000/images/" + location.state.AllProductData.image
    );
    setVarientDiscount(
      location.state.AllProductData.ProductProperties[0].discount
    );
    setVarientType(
      location.state.AllProductData.ProductProperties[0].productProperty
    );
    setVarientAvail(
      location.state.AllProductData.ProductProperties[0].totalAvail
    );
    setVarientId(location.state.AllProductData._id);
  }, []);

  // const addToCart = (e) => {
  //   e.preventDefault();
  //   let user = sessionStorage.getItem("user");

  //   if (sessionStorage.length === 0) {
  //     if (window.confirm("Dear Customer, you need to log in first ") === true) {
  //     }
  //   } else {
  //     let cart = sessionStorage.getItem("cart");
  //     let emptyArray = [];
  //     console.log(cart);

  //     if (cart === "" || cart === null) {
  //       console.log("this one");

  //       let addCard = {
  //         name: props.AllProductData.name,
  //         img: "http://localhost:2000/images/" + props.AllProductData.image,
  //         price:
  //           props.AllProductData.ProductProperties[0].price -
  //           props.AllProductData.ProductProperties[0].discount,
  //         id: VarientId,
  //         qta: props.AllProductData.ProductProperties[0].totalAvail,
  //         orderDone: false,
  //         user: user,
  //       };

  //       emptyArray.push(addCard);

  //       console.log(emptyArray);

  //       sessionStorage.setItem("cart", JSON.stringify(emptyArray));

  //       props.setRender((prev) => !prev);
  //     } else {
  //       console.log("no this one");
  //       let cart = JSON.parse(sessionStorage.getItem("cart"));

  //       let addCard = {
  //         name: VarientName,
  //         img: VarientImage,
  //         price: props.AllProductData[0].price - VarientDiscount,
  //         id: props.AllProductData._id,
  //         qta: 1,
  //         orderDone: false,
  //         user: user,
  //       };

  //       console.log(cart);

  //       cart.push(addCard);

  //       console.log(cart);

  //       sessionStorage.setItem("cart", JSON.stringify(cart));

  //       props.setRender((prev) => !prev);
  //     }
  //     console.log("All good");
  //   }
  // };

  useEffect(() => {
    let data = location.state.AllData;
    console.log(data);
    let displayData = data.filter(
      (element) => element.ProductProperties[0].productProperty !== ""
    );

    console.log(displayData);

    let variants = displayData.map((data) => (
      <div
        onClick={() => {
          setVarientName(data.name);
          setVarientImage("http://localhost:2000/images/" + data.image);
          setVarientDiscount(data.ProductProperties[0].discount);
          setVarientType(data.ProductProperties[0].productProperty);
          setVarientAvail(data.ProductProperties[0].totalAvail);
          console.log(data.ProductProperties[0].totalAvail);
        }}
        style={{
          backgroundImage: `url('http://localhost:2000/images/${data.image}')`,
        }}
        className="Block_One"
      >
        <p className="VarientTitle">
          {data.ProductProperties[0].productProperty}
        </p>
      </div>
    ));

    setVariants(variants);
  }, [AllProductData, location.state.AllProductData]);

  return (
    <>
      {props.MainNavBar}
      <Row className="SliderSecInd">
        <Col className="CartConParent" md={12}>
          <div className="CartContainer">
            <Row>
              <Col className="Product-Visual-Side" md={7}>
                <div onClick={() => Navigate(-1)} className="BackIcon"></div>
                <div className="Product_Name">
                  <h1>{VarientName}</h1>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div
                  className="IndProductImage"
                  style={{ backgroundImage: `url(${VarientImage})` }}
                ></div>
              </Col>

              <Col className="ProductDetail" md={5}>
                <h1>Details</h1>
                <div className="ProductDescript">
                  <p>{location.state.desc}</p>
                </div>
                <div className="ProductInfo">
                  {/* add if only 3 are left */}
                  <div className="inStock">
                    {VarientAvail > 2 ? "In Stock" : "Low Stock"}
                  </div>
                  <div className="brand">Brand: {location.state.brand}</div>
                </div>

                {/* add hide and show if more than one image is available */}
                <div className="Block_One_Con">{variants}</div>

                <h4 className="PriceText">
                  {VarientDiscount === 0
                    ? ""
                    : `R${VarientDiscount} - discounted`}
                </h4>
                <h1 className="PriceText">R{location.state.price}</h1>
                <div className="ColorBlocks"></div>

                <h1 className="Qta">Quantity</h1>
                <div className="Checkout">
                  {/* add if only 3 are left */}
                  <input className="Quantity" defaultValue={1} type="number" />
                  <button className="AddCart">
                    <b>Add to Cart</b>
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default IndProduct;
