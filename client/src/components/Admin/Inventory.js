import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../subcomponents/ProductCard';
import Lenses from '../Mock/Lenses.json';

const Inventory = (props) => {

    const data = Lenses;

    return (
<>        
    {props.AdminNav}
    <Row className="AllProductSec">
        <Col className="AllProductSubSec" md={{span: 12}}>
            <h1 className="txtGrayLight"><b>Inventory</b></h1>
        </Col>

        <Col className="FilterSec" md={{span: 3}}>
            <div className="AddProduct"><h1>Add Product</h1></div>
        </Col>

        <Col className="Products" md={{span: 9}}>
            <div className='Product'></div>
        </Col>
    </Row>
</>
    );
};

export default Inventory;