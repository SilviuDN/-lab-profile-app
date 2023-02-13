import { Component } from "react"
import UsersService from "../../services/users.service"
import { Container, Col, Card, Button, Row } from "react-bootstrap"
import { Link } from "react-router-dom"



class UserDetails extends Component {
    constructor(){
        super()
        this.state = {
            user: undefined
        }
        this.usersService = new UsersService()
    }

    componentDidMount(){
        const {user_id} = this.props.match.params

        this.usersService
            .getUser(user_id)
            .then( response => this.setState({
                user: response.data
            }))
    }

    render(){
        return(
            !this.state.user
            ?
            <h3>Loading...</h3>
            :
            <Container>
                <Row className="justify-content-md-center">
                    <Col  md={6}>
                        <Card className='userCard'>
                            <Card.Img variant="top" src={this.state.user.image} alt={this.state.user.username}/>
                            <Card.Body>
                                <Card.Title>User: {this.state.user.username}</Card.Title>
                                <Card.Text>
                                    <>Email: {this.state.user.email}</>
                                    <>Campus: {this.state.user.campus}</>
                                    <>Course: {this.state.user.course}</>
                                </Card.Text>
                                <Link to={`/users/`}>
                                    <Button variant="dark" size="lg">Back to list</Button>
                                </Link>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        )

    }
}

export default UserDetails