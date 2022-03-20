
import './App.css';
import {Navbar,NavDropdown,Nav,Container,Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './bg.jpg'
function App() {
  return (
    <div className="App">
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"> altbot</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Contact us</Nav.Link>
        <NavDropdown title="products" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">screens</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">audio</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">consoles</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">other products</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="i do agree to the terms and conditions" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
