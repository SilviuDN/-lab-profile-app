import {Component} from 'react'
import UserCard from './UserCard'
import UsersService from '../../services/users.service'
import {Row, Col} from 'react-bootstrap'

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
                {this.state.users.map( (user, index) => <UserCard {...user} key={user._id}/>)}
            </Row>
            

            )
    }
}

export default UsersList