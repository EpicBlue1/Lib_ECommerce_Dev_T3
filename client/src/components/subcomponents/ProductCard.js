import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

const ProductCard = (props) => {

    const ProductNavigate = useNavigate();


    const indProduct = () => {
        ProductNavigate('/IndProduct', {state:{id:props.id, name:props.name, img:'http://localhost:2000/images/' + props.img}});
    }

    let URL = 'http://localhost:2000/images/' + props.img;
    console.log(props.img)

    return (
        <div className="product-card">
            <Row>
                <div className="product-image" style={{ backgroundImage: `url(${URL})`}}>
                    <div className='hoverProduct'>
                        <div className="hoverButt">Add to Cart</div>  
                        <div onClick={indProduct} className="hoverButt">View</div>  
                    </div>
                </div>
                <Col onClick={indProduct} className="productText" md={{span: 12, offset: 1}}>{props.name}</Col>
                <Col className='productText' md={{span: 12, offset: 1}}><div className="productTextDiscount">{props.price}</div><b>R{props.price - props.discount}</b></Col>
            </Row>
        </div>
    );
};

export default ProductCard;