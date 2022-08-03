import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

const ProductCard = (props) => {

    const ProductNavigate = useNavigate();

    return (
        <div onClick={() => ProductNavigate('/IndProduct', { replace: true })} className="product-card">
            <Row>
                <div className="product-image">
                    <div className='hoverProduct'>
                        <div className="hoverButt">Add to Cart</div>  
                        <div className="hoverButt">View</div>  
                    </div>
                </div>
                <Col className="productText" md={{span: 12, offset: 1}}>{props.name}</Col>
                <Col className='productText' md={{span: 12, offset: 1}}><div className="productTextDiscount">{props.price}</div><b>R{props.price - props.discount}</b></Col>
            </Row>
        </div>
    );
};

export default ProductCard;