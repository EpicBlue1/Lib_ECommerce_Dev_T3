import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import ButtSlider from "../subcomponents/BtnSlider";
import Brands from "./Brands";
import NewProds from "./NewProds";
import Onsale from "./OnSale";

const Landing = (props) => {
  const [productImages, setproductImages] = useState();
  const [productCards, setProductCards] = useState();
  const [dots, setDots] = useState();

  const [slideIndex, setSlideIndex] = useState(3);

  const Next = () => {
    if (slideIndex !== productImages.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === productImages.length) {
      setSlideIndex(1);
    }
  };

  const Prev = () => {
    if (slideIndex !== productImages.length) {
      setSlideIndex(slideIndex - 1);
      console.log(slideIndex);
    } else if (slideIndex === 1) {
      setSlideIndex(productImages.length - 1);
      console.log(slideIndex);
    }
  };

  const moveDot = (i) => {
    setSlideIndex(i);
  };

  useEffect(() => {
    axios.get("http://localhost:2000/api/allproducts").then((res) => {
      let data = res.data;
      data = data.filter((Lens) => Lens.ProductProperties[0].discount > 1);

      setproductImages(
        data.map((obj, i) => {
          return (
            <div
              key={obj.id}
              className={slideIndex === i + 1 ? "slide active-anim" : "slide"}
            >
              <div
                className="SliderImage txtGrayDark"
                style={{
                  backgroundImage: `url(${
                    "http://localhost:2000/images/" + obj.image
                  })`,
                }}
              >
                <b>{obj.name}</b>
              </div>
            </div>
          );
        })
      );

      setDots(
        data.map((obj, i) => {
          return (
            <div
              key={obj.id}
              onClick={() => moveDot(i + 1)}
              className={slideIndex === i + 1 ? "dot active" : "dot"}
            ></div>
          );
        })
      );
    });
  }, [slideIndex]);

  return (
    <>
      {props.MainNavBar}
      <Row className="SliderSec">
        <Col className="SliderSubSec" md={{ span: 6, offset: 1 }}>
          <h1 className="txtGrayDark">
            <b>Welcome to Life Is Beautiful</b>
          </h1>
          <br></br>
          <p className="SliderSubSecPar txtGrayDark">
            The best website for all of your photography requirements! Explore a
            wide range of camera lenses from our partners Nikon, Canon, and
            Sony. Treat yourself, and make your photo game easier with a variety
            of accessories available only from us.
          </p>
        </Col>

        <Col className="SliderSubSecRight Slider" md={{ span: 5 }}>
          <div className="ImageCon">
            {productImages}
            <ButtSlider moveSlide={Next} direction={"next"} />
            <ButtSlider moveSlide={Prev} direction={"prev"} />
          </div>

          <div className="ImageConDots">{dots}</div>
        </Col>
      </Row>
      <Onsale
        setRender={props.setRender}
        AllProductData={props.AllProductData}
      />
      <NewProds AllProductData={props.AllProductData} />
      <Brands />
    </>
  );
};

export default Landing;
