import NavBar from './components/subcomponents/NavigationBar';
import AdminNavBar from './components/Admin/AdminNav';
import Landing from './components/Landing/Landing';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/subcomponents/Footer';
import {Route, Routes} from 'react-router-dom';
import AllProducts from './components/AllProducts/AllProducts';
import Cart from './components/Cart/Cart';
import IndProduct from './components/IndividualProduct/IndProduct';
import Inventory from './components/Admin/Inventory';
import PendingOrders from './components/Admin/Pending';

function App() {
  return (
    <Container fluid>
        <Routes>
          <Route path="/" element={<Landing MainNavBar={<NavBar />}/>} />
          <Route path="/AllProducts" element={<AllProducts MainNavBar={<NavBar />}/>} />
          <Route path="/Cart" element={<Cart MainNavBar={<NavBar />}/>} />
          <Route path="/IndProduct" element={<IndProduct MainNavBar={<NavBar />}/>} />
          <Route path="/Inventory" element={<Inventory AdminNav={<AdminNavBar/>}/>} />
          <Route path="/PendingOrders" element={<PendingOrders AdminNav={<AdminNavBar/>}/>} />
        </Routes>
      <Footer />
    </Container>
  );
}

export default App;
