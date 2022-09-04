import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../subcomponents/ProductCard';
import { useState, useEffect } from 'react';

const NewProds = (props) => {
    const [productCards, setProductCards] = useState();
    const AllProductData= props.AllProductData;

    useEffect(() =>{

        let data = AllProductData;

        const last5 = data.slice(-5);

        setProductCards(last5.map(Lens =>(<ProductCard productCode={Lens.ProductProperties[0].productCode} brand={Lens.brand} setRender={props.setRender} key={Lens._id} id={Lens._id} img = {Lens.image} name = {Lens.name} price = {Lens.ProductProperties[0].price} discount={Lens.ProductProperties[0].discount} description={Lens.description} finalTotal={Lens.ProductProperties[0].price - Lens.ProductProperties[0].discount}/>)))

    }, [AllProductData]);

    return (
        <Row className="SaleSec">
            <Col md={{span: 12}}><h2 className="txtCenter txtGrayDark italics">Latest</h2></Col>
            <Col md={10}>
            {productCards}
            </Col>
        </Row>
    );
};

export default NewProds;