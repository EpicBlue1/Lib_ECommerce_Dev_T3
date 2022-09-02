import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddProduct from '../subcomponents/Modals/addProduct';
import InventoryItem from './AdminItems/InventoryItem';

const Inventory = (props) => {
    
    const data = props.AllProductData;

    const [show, setshow] = useState(false);
    
    const showModal = () => {
        setshow(true);
    }

    if(data === undefined){
        return(
            <div>Loading...</div>
        )
    }

    //data checker
    if(data === undefined || data === ''){
        return (<div>Loading...</div>)
    } 
    
    return (
<>        
    {props.AdminNav}
    <Row className="AllProductSec">
        <AddProduct show={show} setShow={setshow}/>
        <Col className="AllProductSubSec" md={{span: 12}}>
            <h1 className="txtGrayDark"><b>Inventory</b></h1>
        </Col>

        <Col className="FilterSec" md={{span: 3}}>
            <div onClick={showModal} className="AddProduct"><h1>Add Product</h1></div>
        </Col>

        <Col className="Products" md={{span: 9}}>
            {data.map(item => (<InventoryItem img={item.images[0]} name={item.name} stock={item.ProductProperties[0].totalAvail} price={item.ProductProperties[0].price} discount = {item.ProductProperties[0].discount}/>))}
        </Col>
    </Row>
</>
    );
};

export default Inventory;