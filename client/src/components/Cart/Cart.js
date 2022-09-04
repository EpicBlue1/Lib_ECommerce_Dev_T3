import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CartProduct from '../subcomponents/CartPageProduct';

const Cart = (props) => {

    const [CartPreview, setCartPreview] = useState("Add Some Products !")
    let cart = JSON.parse(sessionStorage.getItem('cart'));

    useEffect(() => {

    if(cart === undefined || cart === null){

    } else {
    console.log(cart.length)

        let temp = cart.map(item =>(<CartProduct setRender={props.setRender} name={item.name} img={item.img} price={item.price} id={item.id} qta={item.qta} orderDone={item.orderDone} user={item.user}/>));

        setCartPreview(temp);
    }

    }, [props.Rerender]);

    return (
        <>
        {props.MainNavBar}
        <Row className="SliderSec">
            <Col className="AllProductSubSec" md={{span: 12}}>
                <h1 className="txtGrayDark"><b>Cart</b></h1>
                <br></br>
                <p className="txtGrayDark">Welcome to your cart; if you've been a long-term customer with us, the checkout should be auto-populated.</p>
            </Col>
            <Col className="CartConParent" md={12}>
                <div className="CartContainer">
                    <Row>
                        <Col md={8}>
                            <div className="CartProducts">
                            {CartPreview}
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
        </>
    );
};

export default Cart;