import React, {useState, useEffect, useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CartModal from './Modals/CartModal';
import axios from 'axios';

const NavigationBar = () => {

    const [Show, setShow] = useState(false),
    [logPop, setLogPop] = useState(false), 
    email = useRef(),
    password = useRef()

    const hidePop = () => {
        setLogPop(!logPop);
    }

    const logIn = () => {

        let credentials = {
            email: email.current.value,
            password: password.current.value
        }

        console.log(credentials)

        axios.post('http://localhost:2000/api/login', credentials)
        .then((res)=>{
          if(!res.data){
            alert('Bad Request')
          } else {
            if(res.data.user){
              alert('welcome user')
              sessionStorage.setItem('user', res.data.userName);
            //   navigate('/admin')
            } else {
                alert('Go away user');
            }

          }
          console.log(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })

    }


    return (
        <Row className='Navigation'>
            <div className={logPop? 'log_pop_con': 'hide'}>
                <div className='log_pop'>
                    <h1>Welcome</h1>
                    <input ref={email} className='login-Input' placeholder="email"/>
                    <input ref={password} className='login-Input' placeholder="password"/>
                    <div onClick={logIn} className='login-btn'>Log In</div>
                </div>
            </div>
            <Col className='NavObject Logo' md={{span:2, offset: 1}}>LIB</Col>
            <Col className='NavObject Item' md={{span:1}}><Link to="/">Home</Link></Col>
            <Col className='NavObject Item' md={{span:1}}><Link to="/AllProducts">Products</Link></Col>
            <Col className='NavObject Item' md={{span:1}}>About</Col>
            <Col onClick={hidePop} className='NavObject Item Log-In' md={{span:1, offset:2}}>Log In</Col>
            <Col className='NavObject Item pfp' md={{span:1}}></Col>
            <Col onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)} 
                className='NavObject' md={{span:1, offset:1}}>
                <div className={Show ? 'cartIcon cartHover' : 'cartIcon'}></div>
                <div className='cartNum'>2</div>
                <CartModal Show={Show} setShow={setShow}/>
            </Col>
        </Row>
    );
};

export default NavigationBar;