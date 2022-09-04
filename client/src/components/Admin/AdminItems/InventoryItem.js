import React, { useEffect, useState } from 'react';
import EditProduct from '..//../subcomponents/Modals/editProduct';

const InventoryItem = (props) => {

    const [showEd, setshowEdit] = useState(false);

    const showEdit = () => {
        setshowEdit(true);
        console.log("clicked");
    }

    //booleans
    const [discount, setdiscount] = useState();
    const [lowStock, setLowStock] = useState();

    //text
    const [discounted, setdiscounted] = useState("");

    useEffect(() => {
        if(props.discount > 0){
            setdiscounted("Discounted");
            setdiscount(true);
        }

        if(props.stock <= 2 ){
        } else {
            setLowStock(true);
        }

    }, [])

    let URL = 'http://localhost:2000/images/' + props.img;

    return (
        <div key={props.id} className='Product'>
            <EditProduct setUpdateRender={props.setUpdateRender} updateRender={props.updateRender} id={props.id} img={props.img} name={props.name} stock={props.stock} price={props.price} discount = {props.discount} description={props.description} ProductProperty={props.ProductProperty} ProductProperties={props.ProductProperties} category={props.category} brand={props.brand} productCode={props.productCode} show={showEd} setShow={setshowEdit}/>
            <div className='inv-img' style={{ backgroundImage: `url(${URL})`}}></div>
            <div className='inv-proName'>{props.name}</div>
            <div className='inv-icon'></div>
            <div className={lowStock? 'inv-stock': 'inv-stock-red'}>Stock: {props.stock}</div>
            <div className='inv-price'>Price: R{props.price}</div>
            <div className='inv-price'><div className={discount? "discoount_yes" : ""}>{discounted}</div></div>
            <div onClick={showEdit} className='inv-edit'></div>
        </div>
    );
};

export default InventoryItem;