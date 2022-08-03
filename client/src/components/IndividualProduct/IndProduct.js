import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Lenses from '../Mock/Lenses.json';

const IndProduct = (props) => {

    const data = Lenses;
    
    const [slideIndex, setSlideIndex] = useState(1);
    const moveDot = i => {
        setSlideIndex(i);
    }

    return (
    <>
        {props.MainNavBar}
        <Row className="SliderSec">
            <Col className="CartConParent" md={12}>
                <div className="CartContainer">
                    <Row>
                        <Col className="Product-Visual-Side" md={7}>
                            <Link to="/AllProducts"><div className="BackIcon"></div></Link>
                            <div className='Product_Name'><h1>Canon EF 200mm f2</h1></div>
                            <div className="IndProductImage">
                            </div>
                            <div className="ImageConDots">
                                {data.map((obj, i) => {
                                    return (
                                        <div key={obj.id} onClick={() => moveDot (i + 1)} className={slideIndex === i + 1 ? "dot active" : "dot"}>
                                        </div>
                                    )
                                })}
                            </div>
                        </Col>

                        <Col className="ProductDetail" md={5}>
                            <h1>Details</h1>
                            <div className="ProductDescript"><p>orem ipsum dolor sit rem ipsum dolor sit rem ipsum dolor sit amet. Ea maxime recusandae in voluptatem quia et voluptatibus consequatur qui galisum impedit vel magni illum qui numquam tenetur est ipsam veniam. Vel repellendus mol</p></div>
                            <h1 className="Left">Colors</h1>
                            <h1 className="PriceText">R3499</h1>
                            <div className='ColorBlocks'>
                                <div className='Block_One'></div>
                                <div className='Block_One'></div>
                                <div className='Block_One'></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </>
    );
};

export default IndProduct;