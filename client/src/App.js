import NavBar from './components/subcomponents/NavigationBar';
import Landing from './components/Landing/Landing';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/subcomponents/Footer';
import {Route, Routes} from 'react-router-dom';
import AllProducts from './components/AllProducts/AllProducts';
import Cart from './components/Cart/Cart';
import IndProduct from './components/IndividualProduct/IndProduct';

function App() {
  return (
    <Container fluid>
      <NavBar />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/AllProducts" element={<AllProducts/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/IndProduct" element={<IndProduct/>} />
        </Routes>
      <Footer />
    </Container>
  );
}

export default App;
