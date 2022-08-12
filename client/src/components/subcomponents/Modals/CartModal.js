import React, {useState, useEffect} from 'react';
import CartProduct from '../CartProduct';
import {Link} from 'react-router-dom';

const CartModal = (props) => {

    const [checkoutHover, setcheckoutHover] = useState(true);
    
    return (
        <div onMouseEnter={() => props.setShow(true)} onMouseLeave={() => props.setShow(false)} className={props.Show ? "cart-modal" : 'hide'}>
            <div className='CartProductsArea'>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
            </div>
            <div className='Subtotal'>
                <b>Subtotal: R7,998</b>
            </div>
            <Link className='CheckoutButt' to="/Cart"><div className='CheckoutButton'> 
                <b>Proceed to Check Out</b>
            </div></Link>
        </div>
    );
};

export default CartModal;