import { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import UsersService from "../../services/users.service";
import UploadsService from "../../services/uploads.service";
import UserDetails from "./UserDetails";

class UserForm extends Component{
    constructor(props){
        super()
        this.state = {
            user:{
                username: '', 
                email: '', 
                pwd: '',
                image: '', 
                campus: '', 
                course: '',
            },
            isUploading: false
        }
        this.usersService = new UsersService()
        this.uploadsService = new UploadsService()
    }

    handleInputChange = e => {
        const {name, value} = e.target
        this.setState({ user: { ...this.state.user, [name]: value } })

        // this.setState({
        //     [name]: value
        // })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.usersService
            .postUser(this.state)
            .then( response => {
                this.props.toggleModal()
                this.props.loadUsers()
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


    handleFileUpload(e) {

        this.setState({ isUploading: true })

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        this.uploadsService
            .uploadimage(uploadData)
            .then(response => this.setState({ isUploading: false, coaster: { ...this.state.coaster, imageUrl: response.data.secure_url } }))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <Container>
                <h2>New user</h2>
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
                                <Form.Control type="password" name ="pwd" value={this.state.password} onChange={this.handleInputChange} />
                                
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="campus">
                                
                                <Form.Label>Campus</Form.Label>
                                <Form.Control type="text" name ="campus" value={this.state.campus} onChange={this.handleInputChange} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="course">
                                
                                <Form.Label>Course</Form.Label>
                                <Form.Control type="text" name ="course" value={this.state.course} onChange={this.handleInputChange} />

                            </Form.Group>

                            <Form.Group controlId="imageUrl">
                                <Form.Label>Imagen (URL)</Form.Label>
                                <Form.Control type="file" onChange={e => this.handleFileUpload(e)} />
                            </Form.Group>   

                            {/* <Form.Group className="mb-3" controlId="image">
                                
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" name ="image" value={this.state.image} onChange={this.handleInputChange} />

                            </Form.Group> */}


                            <Button variant="success" type="submit" style={{width: '100%', marginTop: '1em'}}>Submit</Button>

                            {/* <Link to='/users'>
                                <Button variant="dark" type="submit">All users</Button>
                            </Link> */}

                        </Form>
                    </Col>
                </Row>

            </Container>

        )
    }
}

export default UserForm