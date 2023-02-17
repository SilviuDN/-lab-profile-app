import { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";

class Signup extends Component{
    constructor(){
        super()
        this.state = {
            username: '', 
            email: '', 
            pwd: '',
            image: '', 
            campus: '', 
            course: ''
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
            .signup(this.state)
            .then( response => {
                this.props.history.push('/login')
                // this.props.toggleModal()
                // this.props.loadUsers()
                this.setState({
                    username: '', 
                    email: '', 
                    pwd: '',
                    image: '', 
                    campus: '', 
                    course: ''
                }) 
            })
            .catch( err => console.log(err))

    }

    render(){
        return(
            <Container>
                <h2>Register</h2>
                <Row className="justify-content-center" style={{marginTop: '2em'}}>
                    <Col md={6}>
                        <Form onSubmit = {this.handleFormSubmit}>

                            <Form.Group className="mb-3" controlId="username">

                                <Form.Label>UserName</Form.Label>
                                <Form.Control type="text" name ="username" value={this.state.username} onChange={this.handleInputChange}/>

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name ="email" value={this.state.email} onChange={this.handleInputChange} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name ="pwd" value={this.state.pwd} onChange={this.handleInputChange} />
                                
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="campus">
                                
                                <Form.Label>Campus</Form.Label>
                                <Form.Control type="text" name ="campus" value={this.state.campus} onChange={this.handleInputChange} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="course">
                                
                                <Form.Label>Course</Form.Label>
                                <Form.Control type="text" name ="course" value={this.state.course} onChange={this.handleInputChange} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="image">
                                
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" name ="image" value={this.state.image} onChange={this.handleInputChange} />

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

export default Signup