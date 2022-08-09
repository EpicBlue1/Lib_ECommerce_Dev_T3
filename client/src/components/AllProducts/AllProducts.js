import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../subcomponents/ProductCard';
import Lenses from '../Mock/Lenses.json';
import axios from 'axios';

const AllProducts = (props) => {

    const data = Lenses;

    axios.get('/api/allproducts', async (req, res) => {
        console.log(res);
    });

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
                <div className="FilterBlock"></div>
            </Col>

            <Col className="Products" md={{span: 9}}>
                <Row>
                    <Col className="SortSec" md={6}>
                        <p className="Sort_Num">500 Products</p>
                    </Col>
                    <Col className="SortSec" md={6}>
                        <p className="Sort_By">Sort by:</p>
                        <select className="SortBlock"></select>
                    </Col>
                </Row>
                    {data.map(Lens =>(<ProductCard key={Lens.id} name = {Lens.name} price = {Lens.ProductProperties[1].price} discount={Lens.ProductProperties[1].discount}/>))}
            </Col>
        </Row>
</>
    );
};

export default AllProducts;