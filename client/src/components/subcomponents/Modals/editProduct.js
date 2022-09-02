import React, {useRef, useState} from 'react';
import axios from 'axios';

const EditProduct = (props) => {

    const prodName = useRef(),
    brand = useRef(),
    category = useRef(),
    description = useRef(),
    totalAvail = useRef(),
    price = useRef(),
    discount = useRef()

    const hideModal = () => {
        props.setShow(false);
    }

    const editProduct = () => {
        
        let template = {
            name: prodName.current.value,
            brand: brand.current.value,
            category: category.current.value,
            ProductProperties: [
                {
                    ProductProperty: prodName.current.value,
                    totalAvail: +totalAvail.current.value,
                    price: +price.current.value,
                    discount: +discount.current.value
                }
            ],
            description: description.current.value,
            images: [
                    prodName.current.value
            ]
        }

        axios.post('http://localhost:2000/api/addproduct', template);

        props.setShow(false);
    }

    const delProduct = () => {
        
        let template = {
            name: prodName.current.value,
            brand: brand.current.value,
            category: category.current.value,
            ProductProperties: [
                {
                    ProductProperty: prodName.current.value,
                    totalAvail: +totalAvail.current.value,
                    price: +price.current.value,
                    discount: +discount.current.value
                }
            ],
            description: description.current.value,
            images: [
                    prodName.current.value
            ]
        }

        axios.post('http://localhost:2000/api/addproduct', template);

        props.setShow(false);
    }

    return (
        <div className={props.show ? "edit-product" : "hide"}>

            <h1>Edit Product</h1>
            <br></br>
            <input ref={prodName} className='input-style' type='text' placeholder='Product Name' />
            <select ref={brand} className='input-style'>
                <option>Canon</option>
                <option>Nikon</option>
                <option>Sony</option>
            </select>
            <select ref={category} className='input-style'>
                <option value={"zoom_lenses"}>Zoom Lenses</option>
                <option value={"wide_Lenses"}>Zoom Lenses</option>
                <option value={"fixed_Lenses"}>Fixed Lenses</option>
                <option value={"Accessories"}>wide_Lenses</option>
            </select> 
            <input ref={description} className='input-style' type='text' placeholder='Description' />
            <input ref={totalAvail} className='input-style' type='number' placeholder='Total Available' />
            <input ref={price} className='input-style' type='text' placeholder='Price' />
            <input ref={discount} className='input-style' type='number' placeholder='Discount' />
            <button onClick={editProduct} className='add-btn'>Add Product</button>
            <button onClick={delProduct} className='add-btn'>Delete Product</button>
            <button onClick={hideModal} className="closeBtn">Close</button>
            
        </div>
    );
};

export default EditProduct;