import {Component} from 'react'
import UsersService from '../../services/users.service'

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
            this.state.users.map( (el, index) => <p key={index}>{el.username}</p>)

            )
    }
}

export default UsersList