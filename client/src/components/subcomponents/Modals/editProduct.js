import React, {useRef, useState} from 'react';
import axios from 'axios';

const EditProduct = (props) => {

    const prodName = useRef(),
    brand = useRef(),
    category = useRef(),
    description = useRef(),
    totalAvail = useRef(),
    price = useRef(),
    discount = useRef(),
    prodVariants = useRef()

    const hideModal = () => {
        props.setShow(false);
    }

    const setUpdateRender = props.setUpdateRender,
    updateRender = props.updateRender

    //default check box
    let brandTemp = props.brand;
    let brandSelect = document.getElementById('SelectBrand');

    // for(var i, j = 0; i = brandSelect.options[j]; j++) {
    //     console.log(i.value)
    //     if(i.value === brandTemp) {
    //         brandSelect.selectedIndex = j;
    //         break;
    //     }
    // }

    const editProduct = () => {
        
        let template = {
            name: prodName.current.value,
            brand: brand.current.value,
            category: category.current.value,
            ProductProperty: prodName.current.value,
            totalAvail: +totalAvail.current.value,
            price: +price.current.value,
            discount: +discount.current.value,
            description: description.current.value,
            images: [
                props.img
            ]
        }

        axios.post('http://localhost:2000/api/addproduct', template);

        props.setShow(false);
    }

    const delProduct = () => {
        

        props.setShow(false);
    }

    return (
        <div className={props.show ? "edit-product" : "hide"}>
            <h1>Edit Product</h1>
                <br></br>
            <input defaultValue={props.name} ref={prodName} className='input-style' type='text' placeholder='Product Name' />
            <select id="SelectBrand" ref={brand} className='input-style'>
                <option>Canon</option>
                <option>Nikon</option>
                <option>Sony</option>
                <option>BlackRapid</option>
                <option>B&W</option>
                <option>LOWEPRO</option>
            </select>
            <select ref={category} className='input-style'>
                <option value={"zoom_lenses"}>Zoom Lenses</option>
                <option value={"wide_Lenses"}>Zoom Lenses</option>
                <option value={"fixed_Lenses"}>Fixed Lenses</option>
                <option value={"Accessories"}>wide_Lenses</option>
            </select>
            <textarea defaultValue={props.description} ref={description} className='input-style' type='text' placeholder='Description' />
                <br></br>
            <input defaultValue={props.ProductProperty} className='input-style'/>
                <label>Property</label>
            <input defaultValue={props.stock} className='input-style'/>
            <label>Stock</label>
                <input defaultValue={props.price} className='input-style'/>
            <label>Price</label>
                <input defaultValue={props.discount} className='input-style'/>
            <label>Discount</label>
            <button onClick={editProduct} className='add-btn'>Edit Product</button>
            <button onClick={delProduct} className='add-btn'>Delete Product</button>
            <button onClick={hideModal} className="closeBtn">Close</button>
        </div>
    );
};

export default EditProduct;