import React from 'react';

const CartProduct = (props) => {

    return (
        <div className="cart-product">
            <h6>{props.name}</h6>
            <p>R{props.price}</p>
            <p>Qta: {props.qta}</p>
            <div className='remove-icon'></div>
        </div>
    );
};

export default CartProduct;