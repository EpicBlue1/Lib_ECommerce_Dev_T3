import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

const AdminNav = () => {
    const [Log, setLog] = useState(false),
    [logPop, setLogPop] = useState(false),
    [logedIn, setLogedIn] = useState('Log Out'),
    Navigate = useNavigate()

    const hidePop = () => {
        setLogPop(!logPop);
    }

    useEffect(()=>{
        let admin = sessionStorage.getItem('admin')
        if(!admin){
          Navigate('/');
        }
    }, [Log])
    
    return (
        <Row className='Navigation'>
            <div className={logPop? 'log_pop_con': 'hide'}>
                <div className={Log? 'hide' : 'log_pop_out'}>
                    <h1>Log Out?</h1>
                        <div onClick={()=> (setLogPop(!logPop), setLogedIn('Log In'), sessionStorage.clear(), setLog(true))} className='login-btn'>Confirm</div>
                        <div onClick={()=> setLogPop(!logPop)} className='login-btn'>Cancel</div>
                </div>
            </div>
            <Col className='NavObject Logo' md={{span:3, offset: 1}}>LIB</Col>
            <Col className='NavObject Item' md={{span:3}}><Link to="/Inventory">Inventory</Link></Col>
            <Col className='NavObject Item' md={{span:3}}><Link to="/PendingOrders">Pending Orders</Link></Col>
            <Col onClick={hidePop} className='NavObject Item Log-In' md={{span:1}}>{logedIn}</Col>
            <Col className='NavObject Item pfp' md={{span:1}}></Col>
        </Row>
    );
};

export default AdminNav;