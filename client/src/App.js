import NavBar from './components/subcomponents/NavigationBar';
import Landing from './components/Landing/Landing';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/subcomponents/Footer';
import {Route, Routes} from 'react-router-dom';
import AllProducts from './components/AllProducts/AllProducts';

function App() {
  return (
    <Container fluid>
      <NavBar />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/AllProducts" element={<AllProducts/>} />
        </Routes>
      <Footer />
    </Container>
  );
}

export default App;
