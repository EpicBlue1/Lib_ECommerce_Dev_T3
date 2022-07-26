import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CartModal from './CartModal';

const NavigationBar = () => {

    const [Show, setShow] = useState(false);

    useEffect(() =>{

    })

    return (
        <Row className='Navigation'>
            <Col className='NavObject Logo' md={{span:2, offset: 1}}>LIB</Col>
            <Col className='NavObject Item' md={{span:1}}><Link to="/">Home</Link></Col>
            <Col className='NavObject Item' md={{span:1}}><Link to="/AllProducts">Products</Link></Col>
            <Col className='NavObject Item' md={{span:1}}>About</Col>
            <Col className='NavObject Item' md={{span:1, offset:2}}>Logout</Col>
            <Col className='NavObject Item pfp' md={{span:1}}></Col>
            <Col onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)} 
            className='NavObject' md={{span:1, offset:1}}>
                <div className='cartIcon'></div>
                <div className='cartNum'>2</div>
                <CartModal Show={Show} setShow={setShow}/>
            </Col>
        </Row>
    );
};

export default NavigationBar;