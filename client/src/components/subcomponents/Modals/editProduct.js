import React, {useRef, useState, useEffect, useContext} from 'react';
import { RenderContext } from '../../Contexts/RenderContext';
import axios from 'axios';

const EditProduct = (props) => {

    const prodName = useRef(),
    brand = useRef(),
    category = useRef(),
    description = useRef(),
    totalAvail = useRef(),
    price = useRef(),
    discount = useRef(),
    productCode = useRef(),
    prodVariant = useRef(),
    {rendered, setRender} = useContext(RenderContext),
    [delPop, setDelPop] = useState(false)

    const hideModal = () => {
        props.setShow(false);
    }

    const hideDel = () => {
        setDelPop(!delPop);
    }

    useEffect(()=>{
        //default drop down box
        let brandDefault = props.brand;
        let categoryDefault = props.category;

        category.current.value = categoryDefault;
        brand.current.value = brandDefault;
    }, [])

    const editProduct = () => {

        let productId = props.id;
        
        let template = {
            name: prodName.current.value,
            brand: brand.current.value,
            category: category.current.value,
            ProductProperty: prodName.current.value,
            totalAvail: +totalAvail.current.value,
            price: +price.current.value,
            discount: +discount.current.value,
            description: description.current.value,
            productCode: +description.current.value,
            image: props.img
        }
        axios.patch('http://localhost:2000/api/updateProduct/' + productId, template)
        .then((res)=>{
            if(res){
                console.log("Updated");
                props.setShow(false);
                setRender(prev => !prev);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    const delProduct = () => {
        
        axios.delete(`http://localhost:2000/api/deleteProduct/${props.id}`)
        .then((res) => {
          setDelPop(!delPop);
          props.setShow(false);
          setRender(prev => !prev);
        })
        .catch(function (err) {console.log(err)})
    }

    return (
        <div className={props.show ? "edit-product" : "hide"}>
            <div onClick={hideDel} className={delPop? 'del_pop_con': 'hide'}>
                <div className='del_pop'>
                    <h1>Are you sure you want to delete {props.name}?</h1>
                    <div className='del-button-yes' onClick={delProduct}>Yes</div>
                    <div className='del-button' onClick={hideDel}>Cancel</div>
                </div>
            </div>
            <h1>Edit Product</h1>
                <br></br>
            <input defaultValue={props.name} ref={prodName} className='input-style' type='text' placeholder='Product Name' />
            <select id="SelectBrand" ref={brand} className='input-style'>
                <option value={"Canon"}>Canon</option>
                <option value={"Nikon"}>Nikon</option>
                <option value={"Sony"}>Sony</option>
                <option value={"BlackRapid"}>BlackRapid</option>
                <option value={"B&W"}>B&W</option>
                <option value={"LOWEPRO"}>LOWEPRO</option>
            </select>
            <select ref={category} className='input-style'>
                <option value={"zoom_lenses"}>Zoom Lenses</option>
                <option value={"wide_Lenses"}>Zoom Lenses</option>
                <option value={"fixed_Lenses"}>Fixed Lenses</option>
                <option value={"Accessories"}>Wide Lenses</option>
            </select>
            <textarea defaultValue={props.description} ref={description} className='input-style' type='text' placeholder='Description' />
                <br></br>
            <input defaultValue={props.ProductProperty} ref={prodVariant} className='input-style'/>
                <label>Property</label>
            <input defaultValue={props.stock} ref={totalAvail} className='input-style'/>
            <label>Stock</label>
                <input defaultValue={props.price} ref={price} className='input-style'/>
            <label>Price</label>
                <input defaultValue={props.discount} ref={discount} className='input-style'/>
            <label>Discount</label>
                <input defaultValue={props.productCode} ref={productCode} className='input-style'/>
            <label>Product Code</label>
            <button onClick={editProduct} className='add-btn'>Edit Product</button>
            <button onClick={hideDel} className='add-btn'>Delete Product</button>
            <button onClick={hideModal} className="closeBtn">Close</button>
        </div>
    );
};

export default EditProduct;