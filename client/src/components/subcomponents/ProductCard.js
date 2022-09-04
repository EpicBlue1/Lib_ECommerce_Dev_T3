import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

const ProductCard = (props) => {

    const ProductNavigate = useNavigate();

    console.log(props.brand)

    const indProduct = () => {
        ProductNavigate('/IndProduct', {state:{id:props.id, name:props.name, img:'http://localhost:2000/images/' + props.img, desc: props.description, brand:props.brand, price:props.price - props.discount}});
    }

    console.log(props.description)

    const addToCart = () => {
        let user = sessionStorage.getItem('user');

        if (sessionStorage.length === 0){
            if (window.confirm("Dear Customer, you need to log in first ") === true) {

            }
        } else {
            let cart = sessionStorage.getItem('cart');
            let emptyArray = [];
            console.log(cart)

            if(cart === '' || cart === null){
                console.log('this one')

                let addCard = {
                    name: props.name,
                    img: 'http://localhost:2000/images/' + props.img,
                    price: props.finalTotal,
                    id: props.id,
                    qta: 1,
                    orderDone: false,
                    user: user
                }

                emptyArray.push(addCard);

                console.log(emptyArray);

                sessionStorage.setItem('cart', JSON.stringify(emptyArray));

                props.setRender(prev => !prev);

            } else {
                console.log('no this one');
                let cart = JSON.parse(sessionStorage.getItem('cart'));

                let addCard = {
                    name: props.name,
                    img: 'http://localhost:2000/images/' + props.img,
                    price: props.finalTotal,
                    id: props.id,
                    qta: 1,
                    orderDone: false,
                    user: user
                }

                console.log(cart)

                cart.push(addCard);

                console.log(cart)

                sessionStorage.setItem('cart', JSON.stringify(cart));

                props.setRender(prev => !prev);
            }
            console.log("All good");
        }

    }

    let URL = 'http://localhost:2000/images/' + props.img;

    return (
        <div key={props.key} className="product-card">
            <Row>
                <div className="product-image" style={{ backgroundImage: `url(${URL})`}}>
                    <div className='hoverProduct'>
                        <div onClick={addToCart} className="hoverButt">Add to Cart</div>  
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