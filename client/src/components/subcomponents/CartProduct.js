import React from 'react';

const CartProduct = (props) => {

    let cart = JSON.parse(sessionStorage.getItem('cart'));

    // useEffect(()=> {



    // }, [props.Render]);

    const removeProd = (e) => {

        if(cart === undefined || cart === null){

        } else {

            console.log(cart.length)

            for (let i = 0; i < cart.length; i++) {
                if(props.name === cart[i].name){
                    console.log(props.name + " " + cart[i].name);

                    cart.splice(i, 1);

                    sessionStorage.setItem('cart', JSON.stringify(cart));

                    props.setRender(prev => !prev);
                }
            }
        }

    }

    return (
        <div className="cart-product">
            <h6>{props.name}</h6>
            <p>R{props.price}</p>
            <p>Qta: {props.qta}</p>
            <div onClick={removeProd} className='remove-icon'></div>
        </div>
    );
};

export default CartProduct;