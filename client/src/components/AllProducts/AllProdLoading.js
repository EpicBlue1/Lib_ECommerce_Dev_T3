import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../subcomponents/ProductCard';
import axios from 'axios';
import { useNavigate } from 'react-router';

const AllProdLoading = (props) => {
    return (
<>
    {props.MainNavBar}
        <Row className="AllProductSec">
            <Col className="AllProductSubSec" md={{span: 12}}>
                <h1 className="txtGrayDark"><b>Camera Lenses & Accessories</b></h1>
                <br></br>
                <p className="txtGrayDark">Lorem ipsum dolor sit amet. Ea maxime recusandae in voluptatem quia et voluptatibus consequatur qui galisum impedit vel magni illum qui numquam tenetur est ipsam veniam. Vel repellendus molestiae est ipsam consectetur id autem enim ut consequatur fugit est voluptatem impedit.</p>
            </Col>

            <Col className="FilterSec" md={{span: 3}}>
            <div className="FilterBlockLoad">
                    <h3></h3>
                        <input 
                            type="radio" name="radio" 
                        />
                        <p></p>

                        <input 
                            type="radio" name="radio" 
                        />
                        <p></p>

                        <input 
                            type="radio" name="radio" 
                        />
                        <p></p>

                    <h3 className='marginTop-h3'></h3>
                        <input type="radio" name="radio" />
                        <p></p>
                        <input type="radio" name="radio" />
                        <p></p>
                    <div className='clearFilter-btn-Loading'></div>
                </div>
            </Col>

            <Col className="Products" md={{span: 9}}>
                <Row>
                    <Col className="SortSec" md={6}>
                        <p className="Sort_Num_Loading">
                        </p>
                    </Col>
                    <Col className="SortSec" md={6}>
                    <select className="SortBlock-Loading">
                    </select>
                        <p className="Sort_By_Loading"></p>
                    </Col>
                </Row>
                <div className="product-card-loading">
                    <Row>
                        <div className="product-image">
                            <div className='hoverProduct hide'>
                                <div className="hoverButt">Add to Cart</div>  
                                <div className="hoverButt">View</div>  
                            </div>
                        </div>
                        <Col className="productText-Loading" md={{span: 12, offset: 1}}></Col>
                        <Col className='productText-Loading' md={{span: 12, offset: 1}}><div className="productTextDiscount"></div><b></b></Col>
                    </Row>
                </div> 
                <div className="product-card-loading">
                    <Row>
                        <div className="product-image">
                            <div className='hoverProduct hide'>
                                <div className="hoverButt">Add to Cart</div>  
                                <div className="hoverButt">View</div>  
                            </div>
                        </div>
                        <Col className="productText-Loading" md={{span: 12, offset: 1}}></Col>
                        <Col className='productText-Loading' md={{span: 12, offset: 1}}><div className="productTextDiscount"></div><b></b></Col>
                    </Row>
                </div> 
                <div className="product-card-loading">
                    <Row>
                        <div className="product-image">
                            <div className='hoverProduct hide'>
                                <div className="hoverButt">Add to Cart</div>  
                                <div className="hoverButt">View</div>  
                            </div>
                        </div>
                        <Col className="productText-Loading" md={{span: 12, offset: 1}}></Col>
                        <Col className='productText-Loading' md={{span: 12, offset: 1}}><div className="productTextDiscount"></div><b></b></Col>
                    </Row>
                </div> 
                <div className="product-card-loading">
                    <Row>
                        <div className="product-image">
                            <div className='hoverProduct hide'>
                                <div className="hoverButt">Add to Cart</div>  
                                <div className="hoverButt">View</div>  
                            </div>
                        </div>
                        <Col className="productText-Loading" md={{span: 12, offset: 1}}></Col>
                        <Col className='productText-Loading' md={{span: 12, offset: 1}}><div className="productTextDiscount"></div><b></b></Col>
                    </Row>
                </div> 
                <div className="product-card-loading">
                    <Row>
                        <div className="product-image">
                            <div className='hoverProduct hide'>
                                <div className="hoverButt">Add to Cart</div>  
                                <div className="hoverButt">View</div>  
                            </div>
                        </div>
                        <Col className="productText-Loading" md={{span: 12, offset: 1}}></Col>
                        <Col className='productText-Loading' md={{span: 12, offset: 1}}><div className="productTextDiscount"></div><b></b></Col>
                    </Row>
                </div> 
                <div className="product-card-loading">
                    <Row>
                        <div className="product-image">
                            <div className='hoverProduct hide'>
                                <div className="hoverButt">Add to Cart</div>  
                                <div className="hoverButt">View</div>  
                            </div>
                        </div>
                        <Col className="productText-Loading" md={{span: 12, offset: 1}}></Col>
                        <Col className='productText-Loading' md={{span: 12, offset: 1}}><div className="productTextDiscount"></div><b></b></Col>
                    </Row>
                </div>        
            </Col>
        </Row>
</>
    );
};

export default AllProdLoading;