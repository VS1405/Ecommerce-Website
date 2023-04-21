
import './App.css';
import { Navbar, Container } from 'react-bootstrap';
import Item from './Component/ItemList/Item';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" >Ecommerce</Navbar.Brand>
        </Container>
      </Navbar>
      <Item />

    </>
  );
}

export default App;
