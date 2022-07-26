import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const IndProduct = () => {
    return (
        <Row className="SliderSec">
            <Col className="CartConParent" md={12}>
                <div className="CartContainer">
                    <Row>
                        <Col className="Product-Visual-Side" md={7}>
                        <div className="BackIcon"></div>
                            <div className="IndProductImage"></div>
                        </Col>

                        <Col className="ProductDetail" md={5}>
                            <h1>Details</h1>
                            <div className="ProductDescript"><p>orem ipsum dolor sit rem ipsum dolor sit rem ipsum dolor sit amet. Ea maxime recusandae in voluptatem quia et voluptatibus consequatur qui galisum impedit vel magni illum qui numquam tenetur est ipsam veniam. Vel repellendus mol</p></div>
                            <h1>Colors</h1>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};

export default IndProduct;