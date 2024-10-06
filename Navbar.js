import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiUser } from "react-icons/ci";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-dark">
      <Container>
        <Navbar.Brand href="#home">TAIKONZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">P2P</Nav.Link>
            <Nav.Link href="#deets">Trade</Nav.Link>
            <Nav.Link href="#deets">Stacking</Nav.Link>
            <Nav.Link href="#deets">Launchpad</Nav.Link>
            <Nav.Link href="#deets">Swap</Nav.Link>
            <Nav.Link href="#deets">Orders</Nav.Link>
            <Nav.Link href="#deets"><CiUser />Portfolio</Nav.Link>
            <NavDropdown title="INR" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;