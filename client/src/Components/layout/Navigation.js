import {Nav, Navbar, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AuthService from '../../services/auth.service'

const Navigation = ({storeUser, loggedUser,  showAlert}) => {

  const authService = new AuthService()

  const logout = () => {
    authService
      .logout()
      .then( () => { 
        storeUser(undefined) 
        showAlert('You have succesfully logged out.')
      })
      .catch( err => console.log('We have a logout error:' , err) )
  }

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
            
            {
              loggedUser 
              ?
              <>
                <Link to="/user-profile" className="nav-link">My profile</Link>
                <span className="nav-link" onClick={logout} style={{cursor: "pointer"}}>Logout</span>
                <span className="nav-link" >Hello, {loggedUser ? loggedUser.username : "invitad@"}!</span>                
              </>
              :
              <>
                <Link to="/signup" className="nav-link">Signup</Link>
                <Link to="/login" className="nav-link">Login</Link>    
              </>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;