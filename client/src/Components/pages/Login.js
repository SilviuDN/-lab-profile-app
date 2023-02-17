import { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '', 
            pwd: ''
        }
        this.authService = new AuthService()
    }

    handleInputChange = e => {
        const {name, value} = e.target

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.authService
            .login(this.state)
            .then( loggedUserFromServer => {
                this.props.history.push('/')
                this.props.storeUser(loggedUserFromServer.data)
                // this.props.toggleModal()
                // this.props.loadUsers()
                this.setState({
                    username: '', 
                    pwd: '',
                }) 
            })
            .catch( err => console.log(err))

    }

    render(){
        return(
            <Container>
                <h2>Login</h2>
                <Row className="justify-content-center" style={{marginTop: '2em'}}>
                    <Col md={6}>
                        <Form onSubmit = {this.handleFormSubmit}>

                            <Form.Group className="mb-3" controlId="username">

                                <Form.Label>UserName</Form.Label>
                                <Form.Control type="text" name ="username" value={this.state.username} onChange={this.handleInputChange}/>

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name ="pwd" value={this.state.pwd} onChange={this.handleInputChange} />
                                
                            </Form.Group>

                            <Button variant="success" type="submit" style={{width: '100%', margin: '1em 0'}}>Submit</Button>

                        </Form>

                        <Link to='/users'>
                            <Button variant="dark" style={{width: '100%', margin: '1em 0'}}>All users</Button>
                        </Link>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Login