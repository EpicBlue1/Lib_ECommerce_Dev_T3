import NavBar from './components/subcomponents/NavigationBar';
import Landing from './components/Landing/Landing';
import { Container, Row, Col } from 'react-bootstrap';
import Onsale from './components/Landing/OnSale';

function App() {
  return (
    <Container fluid>
      <NavBar />
      <Landing />
      <Onsale />
    </Container>
  );
}

export default App;
