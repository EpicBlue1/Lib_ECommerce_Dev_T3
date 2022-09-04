import React, {useRef, useEffect, useState, useContext} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddProduct from '../subcomponents/Modals/addProduct';
import InventoryItem from './AdminItems/InventoryItem';
import { RenderContext } from '../Contexts/RenderContext';

const Inventory = (props) => {
    
    const data = props.AllProductData;

    const [show, setshow] = useState(false);
    const [updateRender, setUpdateRender] = useState(false)
    
    const showModal = () => {
        setshow(true);
    }

    const {rendered, setRender} = useContext(RenderContext)

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
            {data.map(item => (<InventoryItem setUpdateRender={setUpdateRender} productCode={item.ProductProperties[0].productCode} updateRender={updateRender} key={item._id} id={item._id} category={item.category} brand={item.brand} img={item.image} name={item.name} ProductProperty={item.ProductProperties[0].ProductProperty} ProductProperties={item.ProductProperties} stock={item.ProductProperties[0].totalAvail} price={item.ProductProperties[0].price} discount = {item.ProductProperties[0].discount} description={item.description}/>))}
        </Col>
    </Row>
</>
    );
};

export default Inventory;