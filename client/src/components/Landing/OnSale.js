import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../subcomponents/ProductCard";

const OnSale = (props) => {
  const [productCards, setProductCards] = useState();
  const AllProductData = props.AllProductData;

  useEffect(() => {
    let data = AllProductData;
    data = data.filter((Lens) => Lens.ProductProperties[0].discount > 0);

    setProductCards(
      data.map((Lens) => <ProductCard key={Lens._id} AllProductData={Lens} />)
    );
  }, [AllProductData]);

  return (
    <Row className="SaleSec">
      <Col md={{ span: 12 }}>
        <h2 className="txtCenter txtGrayDark italics">On Sale</h2>
      </Col>
      <Col md={10}>{productCards}</Col>
    </Row>
  );
};

export default OnSale;
