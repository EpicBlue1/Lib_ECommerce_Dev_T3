import NavBar from './components/subcomponents/NavigationBar';
import Landing from './components/Landing/Landing';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/subcomponents/Footer';

function App() {
  return (
    <Container fluid>
      <NavBar />
      <Landing />
      <Footer />
    </Container>
  );
}

export default App;
