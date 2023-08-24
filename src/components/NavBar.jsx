import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ fontWeight: 600 }}
    >
      <Container fluid>
        <Navbar.Brand href="#">Redux-Toolkit-Demo</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link as={Link} to="/cart">
              My Cart 🛒 {cartProducts.length}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
