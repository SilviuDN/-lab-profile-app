import { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import UsersService from "../../services/users.service";
import UserDetails from "./UserDetails";

class UserForm extends Component{
    constructor(){
        super()
        this.state = {
            username: '', 
            email: '', 
            password: '',
            image: '', 
            campus: '', 
            course: ''
        }
        this.usersService = new UsersService()
    }

    handleInputChange = e => {
        const {name, value} = e.target

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        console.log('Hey!!!')
        this.usersService
            .postUser(this.state)
            .then( response => {
               this.setState({
                username: '', 
                email: '', 
                password: '',
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
                        <Form.Control type="password" name ="password" value={this.state.password} onChange={this.handleInputChange} />
                        
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

                    
                    <Button variant="success" type="submit">Submit</Button>

                    <Link to='/users'>
                        <Button variant="dark" type="submit">All users</Button>
                    </Link>

                </Form>
            </Container>

        )
    }
}

export default UserForm