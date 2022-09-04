import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const IndProduct = (props) => {

    const Navigate = useNavigate();
    const [variants, setVariants] = useState()

    const Data = props.AllProductData;
    let filter = props.AllProductData;

    const location = useLocation();
    
    const [slideIndex, setSlideIndex] = useState(1);
    const moveDot = i => {
        setSlideIndex(i);
    }

    useEffect(() => {
        console.log(location.state.productCode);
        console.log(Data);
        

        // filter = Data.filter(Product => location.state.productCode === Product.ProductProperties[0].productCode);
        // setVariants(filter)

        console.log(variants)
    }, [])

    console.log(location.state.img)

    return (
    <>
        {props.MainNavBar}
        <Row className="SliderSecInd">
            <Col className="CartConParent" md={12}>
                <div className="CartContainer">
                    <Row>
                        <Col className="Product-Visual-Side" md={7}>
                            <div onClick={()=>Navigate(-1)} className="BackIcon"></div>
                            <div className='Product_Name'><h1>{location.state.name}</h1></div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="IndProductImage" style={{ backgroundImage: `url(${location.state.img})`}}>
                            </div>
                            <h2 className='txtGrayDark'></h2>
                            <div className="MoreSimilar">

                            </div>
                        </Col>

                        <Col className="ProductDetail" md={5}>
                            <h1>Details</h1>
                            <div className="ProductDescript"><p>{location.state.desc}</p></div>
                            <div className="ProductInfo">
                                {/* add if only 3 are left */}
                                <div className="inStock">In Stock</div>
                                <div className="brand">Brand: {location.state.brand}</div>
                            </div>

                        {/* add hide and show if more than one image is available */}
                            <h1 className="Left"></h1>
                            <h1 className="PriceText">R{location.state.price}</h1>
                            <div className='ColorBlocks'>
                            </div>

                            <h1 className="Qta">Quantity</h1>
                            <div className="Checkout">
                                {/* add if only 3 are left */}
                                <input className="Quantity" type="number"/>
                                <button className="AddCart"><b>Add to Cart</b></button>
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