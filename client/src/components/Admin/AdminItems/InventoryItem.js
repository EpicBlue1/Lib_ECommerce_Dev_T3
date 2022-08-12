import React, { useEffect, useState } from 'react';

const InventoryItem = (props) => {

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

    return (
        <div className='Product'>
            <div className='inv-img' style={{ backgroundImage: `url(${props.img})`}}></div>
            <div className='inv-proName'>{props.name}</div>
            <div className='inv-icon'></div>
            <div className={lowStock? 'inv-stock': 'inv-stock-red'}>Stock: {props.stock}</div>
            <div className='inv-price'>Price: R{props.price}</div>
            <div className='inv-price'><div className={discount? "discoount_yes" : ""}>{discounted}</div></div>
            <div className='inv-edit'></div>
        </div>
    );
};

export default InventoryItem;