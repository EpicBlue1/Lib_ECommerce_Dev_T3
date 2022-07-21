import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../subcomponents/ProductCard';

const Brands = () => {
    return (
        <Row className="SaleSec">
            <Col md={{span: 12}}><h2 className="txtCenter txtGrayDark italics">Our Brands</h2></Col>
            <Col md={10} className='brandsSec'>
                <div className="brandImgOne"></div>
                <div className="brandImgOne"></div>
                <div className="brandImgOne"></div>
            </Col>
        </Row>
    );
};

export default Brands;