import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CartProduct from '../subcomponents/CartPageProduct';

const Cart = () => {
    return (
        <Row className="SliderSec">
            <Col className="AllProductSubSec" md={{span: 12}}>
                <h1 className="txtGrayLight"><b>Cart</b></h1>
                <br></br>
                <p>Lorem ipsum dolor sit amet. Ea maxime recusandae in voluptatem quia et voluptatibus consequatur qui galisum impedit vel magni illum qui numquam tenetur est ipsam veniam. Vel repellendus molestiae est ipsam consectetur id autem enim ut consequatur fugit est voluptatem impedit.</p>
            </Col>
            <Col className="CartConParent" md={12}>
                <div className="CartContainer">
                    <Row>
                        <Col md={8}>
                            <div className="CartProducts">
                                <CartProduct/>
                                <CartProduct/>
                                <CartProduct/>
                                <CartProduct/>
                            </div>
                            <div className="CartInfo">
                                <div className="ContShopping">
                                    <div className="BackIcon"></div>
                                    <b>Continue Shopping</b>
                                </div>
                                <p><b>Subtotal: R12,998</b></p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="UserDetails">

                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};

export default Cart;