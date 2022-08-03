import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../subcomponents/ProductCard';
import Lenses from '../Mock/Lenses.json';

const OnSale = () => {
    const data = Lenses.filter(Lens => Lens.ProductProperties[1].discount > 0);

    return (
        <Row className="SaleSec">
            <Col md={{span: 12}}><h2 className="txtCenter txtGrayDark italics">On Sale</h2></Col>
            <Col md={10}>
            {data.map(Lens =>(
                <ProductCard key={Lens.id} name = {Lens.name} discount={Lens.ProductProperties[1].discount} price = {Lens.ProductProperties[1].price}/>
            ))}
            </Col>
        </Row>
    );
};

export default OnSale;