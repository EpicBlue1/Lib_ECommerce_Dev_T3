import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Row className='Footer'>
            <Col md={8} className='copyright'>Ⓒ 2022 Life Is Beautiful. All rights reserved</Col>
            <Col md={4} className='logos'></Col>
        </Row>
    );
};

export default Footer;