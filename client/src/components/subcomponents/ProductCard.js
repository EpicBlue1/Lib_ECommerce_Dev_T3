import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <Row>
                <div className="product-image"><div className='hoverProduct'>
                    <div className="hoverButt">Add to Cart</div>  
                    <div className="hoverButt">View</div>      
                </div></div>
                <Col className="productText" md={{span: 5, offset: 1}}>Canon 55mm</Col>
                <Col className='productText' md={{span: 4, offset: 1}}><div className="productTextDiscount">R3,999</div><b>R3,999</b></Col>
            </Row>
        </div>
    );
};

export default ProductCard;