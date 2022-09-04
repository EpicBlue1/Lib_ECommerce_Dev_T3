import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../subcomponents/ProductCard';
import axios from 'axios';

const OnSale = () => {
    const [productCards, setProductCards] = useState();

    useEffect(() =>{

        axios.get('http://localhost:2000/api/allproducts')
        .then((res) => {
            console.log(res.data)
            let data = res.data;
            data = data.filter(Lens => Lens.ProductProperties[0].discount > 0);

            setProductCards(data.map(Lens =>(<ProductCard key={Lens.id} img = {Lens.image} name = {Lens.name} price = {Lens.ProductProperties[0].price} discount={Lens.ProductProperties[0].discount}/>)))
        })

    }, []);

    return (
        <Row className="SaleSec">
            <Col md={{span: 12}}><h2 className="txtCenter txtGrayDark italics">On Sale</h2></Col>
            <Col md={10}>
            {productCards}
            </Col>
        </Row>
    );
};

export default OnSale;