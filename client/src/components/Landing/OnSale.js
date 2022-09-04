    import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../subcomponents/ProductCard';
import axios from 'axios';

const OnSale = (props) => {
    const [productCards, setProductCards] = useState();
    const AllProductData= props.AllProductData;

    useEffect(() =>{

        let data = AllProductData;
        data = data.filter(Lens => Lens.ProductProperties[0].discount > 0);

        setProductCards(data.map(Lens =>(<ProductCard AllProductData={data} productCode={Lens.ProductProperties[0].productCode} brand={Lens.brand} setRender={props.setRender} key={Lens._id} id={Lens._id} img = {Lens.image} name = {Lens.name} price = {Lens.ProductProperties[0].price} discount={Lens.ProductProperties[0].discount} description={Lens.description} finalTotal={Lens.ProductProperties[0].price - Lens.ProductProperties[0].discount}/>)))

    }, [AllProductData]);

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