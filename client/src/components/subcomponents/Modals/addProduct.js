import React from 'react';

const AddProduct = (props) => {

    const hideModal = () => {
        props.setShow(false);
    }


    return (
        <div className={props.show ? "add-product" : "hide"}>

            <div onClick={hideModal} className="closeBtn"></div>
            
        </div>
    );
};

export default AddProduct;