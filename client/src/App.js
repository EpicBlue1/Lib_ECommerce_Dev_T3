import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import NavBar from './components/subcomponents/NavigationBar';
import AdminNavBar from './components/Admin/AdminNav';
import Landing from './components/Landing/Landing';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/subcomponents/Footer';
import {Route, Routes, useNavigate} from 'react-router-dom';
import AllProducts from './components/AllProducts/AllProducts';
import Cart from './components/Cart/Cart';
import IndProduct from './components/IndividualProduct/IndProduct';
import Inventory from './components/Admin/Inventory';
import PendingOrders from './components/Admin/Pending';
import { RenderContext } from './components/Contexts/RenderContext';

function App() {

  const [AllProductData, setAllProductData] = useState([]);

  const {rendered, setRender} = useContext(RenderContext)

  const Navigate = useNavigate();

  useEffect(() =>{

    axios.get('http://localhost:2000/api/allproducts')
    .then((res) => {
        console.log(res.data)
        const data = res.data;

        setAllProductData(data);
    })

  }, [rendered]);

  useEffect(() => {
    const admin = sessionStorage.getItem('admin')
    console.log(admin)
    if(admin){
      Navigate('/Inventory');
    } else if(admin === '' || admin === null || admin === undefined|| admin === false){
      Navigate('/');
    }
  }, [])

  return (
    <Container fluid>
        <Routes>
          <Route path="/" element={<Landing setRender={setRender} AllProductData={AllProductData} MainNavBar={<NavBar setRender={setRender} Render={rendered} />}/>} />
          <Route path="/AllProducts" element={<AllProducts setRender={setRender} AllProductData={AllProductData} MainNavBar={<NavBar  setRender={setRender} Render={rendered}/>}/>} />
          <Route path="/Cart" element={<Cart Render={rendered} setRender={setRender} MainNavBar={<NavBar setRender={setRender} Render={rendered} />}/>} />
          <Route path="/IndProduct" element={<IndProduct MainNavBar={<NavBar  setRender={setRender} Render={rendered}/>}/>} />
          <Route path="/Inventory" element={<Inventory AllProductData={AllProductData} AdminNav={<AdminNavBar/>}/>} />
          <Route path="/PendingOrders" element={<PendingOrders AdminNav={<AdminNavBar/>}/>} />
        </Routes>
      <Footer />
    </Container>
  );
}

export default App;
