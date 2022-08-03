import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../subcomponents/ProductCard';
import Lenses from '../Mock/Lenses.json';

const Pending = (props) => {
    return (
<>        
    {props.AdminNav}
    <Row className="AllProductSec">
        <Col className="AllProductSubSec" md={{span: 12}}>
            <h1 className="txtGrayLight"><b>Inventory</b></h1>
        </Col>

        <Col className="Products" md={{span: 12}}>
            <div className='Product'></div>
        </Col>
    </Row>
</>
    );
};

export default Pending;