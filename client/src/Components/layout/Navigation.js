import {Nav, Navbar, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" style={{marginBottom: '2em'}}>
      <Container>
        <Navbar.Brand href="#home">ProfileApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/users" className="nav-link">Users</Link>
            <Link to="/users/newUser" className="nav-link">New user</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;