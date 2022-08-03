import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const AdminNav = () => {
    return (
        <Row className='Navigation'>
            <Col className='NavObject Logo' md={{span:3, offset: 1}}>LIB</Col>
            <Col className='NavObject Item' md={{span:3}}><Link to="/Inventory">Inventory</Link></Col>
            <Col className='NavObject Item' md={{span:3}}><Link to="/PendingOrders">Pending Orders</Link></Col>
            <Col className='NavObject Item' md={{span:1}}>Logout</Col>
            <Col className='NavObject Item pfp' md={{span:1}}></Col>
        </Row>
    );
};

export default AdminNav;