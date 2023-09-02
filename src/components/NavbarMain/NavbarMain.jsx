import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavbarMain({ setExpanded, expanded, handleShow, companyName }) {
  //console.log(expanded)


  return (<>
  <div>
    <Navbar expand="md" expanded={expanded} className="bg-body-tertiary">
      <Container fluid style={{width: "90%"}}>
        <Navbar.Brand href="/home" style={{ order: "-2" }}>{companyName}</Navbar.Brand>
        <div>
          <Button variant="primary" onClick={handleShow} className="me-2">Cart</Button>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(expanded ? false : "expanded")} />
        </div>
        <Navbar.Collapse id="navbarScroll" style={{ order: expanded ? "1" : "-1" }}>
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to ="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">services</Nav.Link>
            {/*<NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
  </NavDropdown>*/}
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          {/*<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
</Form>*/}
          <Nav>
            <Button title='Log In' as={Link} to='/login'>Log In</Button>
            <Button title='Sign Up' as={Link} to='/signup'>Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </div>
  </>


  );
}

export default NavbarMain;