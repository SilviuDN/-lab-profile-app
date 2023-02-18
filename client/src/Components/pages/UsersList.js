import {Component} from 'react'
import UserCard from './UserCard'
import UsersService from '../../services/users.service'
import {Row, Button, Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserForm from './UserForm'

class UsersList extends Component{

    constructor(){
        super()
        this.state = {
            users: undefined,
            modal: false
        }
                
        this.usersService = new UsersService()

    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    loadUsers = () => {
        this.usersService
            .getUsers()
            .then( response => this.setState({ users: response.data }) )
            .catch( err => console.log(err) ) 
    }

    componentDidMount = () => {
        this.loadUsers()
    }

    render(){
        // console.log(this.props)
        return (            
            // <h2>Loading...</h2>
            !this.state.users
            ?
            <h2>Loading...</h2>
            :
            <>
            {
                this.props.loggedUser 
                &&
                <Button onClick={this.toggleModal} variant="dark" size="lg">New User</Button>
            }
            
            <Row>
                {this.state.users.map( (user, index) => <UserCard {...user} key={user._id}/>)}
            </Row>
            <Modal show={this.state.modal} onHide={this.toggleModal}>
            {/* <Modal show={this.state.modal} onHide={() => this.toggleModal()}> */}
            {/* <Modal show={this.state.modal} onHide={() => this.setState({modal: false})}> */}
                <Modal.Header>
                    <Modal.Title>Register new user</Modal.Title>
                </Modal.Header>                    
                <Modal.Body><UserForm toggleModal={this.toggleModal} loadUsers = {this.loadUsers}/></Modal.Body>
                {/* <Modal.Body><UserForm toggleModal={() => this.toggleModal()} loadUsers = {() => this.loadUsers()}/></Modal.Body> */}
                {/* <Modal.Body><UserForm toggleModal={() => this.setState({modal: false})} loadUsers = {() => this.loadUsers()}/></Modal.Body> */}
            </Modal>
            </>

            )
    }
}

export default UsersList