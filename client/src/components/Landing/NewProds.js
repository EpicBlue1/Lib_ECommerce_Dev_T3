import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../subcomponents/ProductCard";

const NewProds = (props) => {
  const [productCards, setProductCards] = useState();
  const AllProductData = props.AllProductData;

  useEffect(() => {
    let data = AllProductData;

    const last5 = data.slice(-5);

    setProductCards(
      last5.map((Lens) => <ProductCard key={Lens._id} AllProductData={Lens} />)
    );
  }, [AllProductData]);

  return (
    <Row className="SaleSec">
      <Col md={{ span: 12 }}>
        <h2 className="txtCenter txtGrayDark italics">Latest</h2>
      </Col>
      <Col md={10}>{productCards}</Col>
    </Row>
  );
};

export default NewProds;
