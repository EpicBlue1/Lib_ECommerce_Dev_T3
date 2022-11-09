import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../subcomponents/ProductCard";
import AdminItems from "./AdminItems/AdminItems";

const Pending = (props) => {
  const [Display, setDisplay] = useState();
  const [discounted, setdiscounted] = useState("");
  const [update, setUpdate] = useState();

  useEffect(() => {
    axios.get("http://localhost:2000/api/allorders/").then((e) => {
      let data = e.data;

      let pending = data.map((order) =>
        order.orders.map((mapped) => (
          <AdminItems
            update={update}
            id={order._id}
            setUpdate={setUpdate}
            allData={mapped}
          />
        ))
      );

      setDisplay(pending);
    });
  }, [update]);

  return (
    <>
      {props.AdminNav}
      <Row className="AllProductSec">
        <Col className="AllProductSubSec" md={{ span: 12 }}>
          <h1 className="txtGrayDark">
            <b>Pending Orders</b>
          </h1>
        </Col>

        <Col className="Products" md={{ span: 12 }}>
          {Display}
        </Col>
      </Row>
    </>
  );
};

export default Pending;
