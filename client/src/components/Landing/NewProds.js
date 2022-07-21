import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../subcomponents/ProductCard';

const NewProds = () => {
    return (
        <Row className="SaleSec">
            <Col md={{span: 12}}><h2 className="txtCenter txtGrayDark italics">New Products</h2></Col>
            <Col md={10}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Col>
        </Row>
    );
};

export default NewProds;