import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {

    let easterEgg = ('b' + 'a' + + 'a' + 'a').toLocaleLowerCase()
    console.log(easterEgg)

    return (
        <Row className='Footer'>
            <Col md={8} className='copyright'>Ⓒ 2022 Life Is Beautiful. All rights reserved</Col>
            <Col md={4} className='logos'></Col>
        </Row>
    );
};

export default Footer;