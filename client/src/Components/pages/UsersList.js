import {Component} from 'react'
import UserCard from './UserCard'
import UsersService from '../../services/users.service'
import {Row, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class UsersList extends Component{

    constructor(){
        super()
        this.state = {
            users: undefined
        }
                
        this.usersService = new UsersService()

    }

    componentDidMount = () => {
        this.usersService
            .getUsers()
            .then( response => this.setState({ users: response.data }) )
            .catch( err => console.log(err) ) 
    }

    render(){
        return (            
            // <h2>Loading...</h2>
            !this.state.users
            ?
            <h2>Loading...</h2>
            :
            <Row>
                <Link to={`/users/newUser`}>
                    <Button variant="dark" size="lg">New User</Button>
                </Link>
                {this.state.users.map( (user, index) => <UserCard {...user} key={user._id}/>)}
            </Row>
            

            )
    }
}

export default UsersList