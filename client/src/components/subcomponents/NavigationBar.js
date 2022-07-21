import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NavigationBar = () => {


    return (
        <Row className='Navigation'>
            <Col className='NavObject Logo' md={{span:2, offset: 1}}>LIB</Col>
            <Col className='NavObject Item' md={{span:1}}>Home</Col>
            <Col className='NavObject Item' md={{span:1}}>Products</Col>
            <Col className='NavObject Item' md={{span:1}}>About</Col>
            <Col className='NavObject Item' md={{span:1, offset:2}}>Logout</Col>
            <Col className='NavObject Item pfp' md={{span:1}}></Col>
            <Col className='NavObject Item' md={{span:1, offset:1}}>Cart</Col>
        </Row>
    );
};

export default NavigationBar;