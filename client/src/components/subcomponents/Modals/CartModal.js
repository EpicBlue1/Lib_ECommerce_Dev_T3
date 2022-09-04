import React, {useState, useEffect} from 'react';
import CartProduct from '../CartProduct';
import {Link} from 'react-router-dom';

const CartModal = (props) => {

    const [checkoutHover, setcheckoutHover] = useState(true);
    const [CartPreview, setCartPreview] = useState("Add Some Products !");
    const [subTotal, setSubTotal] = useState()

    let cart = JSON.parse(sessionStorage.getItem('cart'));

    useEffect(() => {

    if(cart === undefined || cart === null){

    } else {
    console.log(cart.length)

        let temp = cart.map(item =>(<CartProduct setRender={props.setRender} name={item.name} img={item.img} price={item.price} id={item.id} qta={item.qta} orderDone={item.orderDone} user={item.user}/>));

        let subTotal = cart.reduce((n, {price}) => n + price, 0)
        console.log(subTotal);

        setSubTotal(subTotal)

        setCartPreview(temp);
    }

    }, [props.Rerender])
    
    return (
        <div onMouseEnter={() => props.setShow(true)} onMouseLeave={() => props.setShow(false)} className={props.Show ? "cart-modal" : 'hide'}>
            <div className='CartProductsArea'>
                {CartPreview}
            </div>
            <div className='Subtotal'>
                <b>Subtotal: R{subTotal}</b>
            </div>
            <Link className='CheckoutButt' to="/Cart"><div className='CheckoutButton'> 
                <b>Proceed to Check Out</b>
            </div></Link>
        </div>
    );
};

export default CartModal;