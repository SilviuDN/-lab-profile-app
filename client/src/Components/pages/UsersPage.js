import UsersList from "./UsersList"
import {Container} from 'react-bootstrap'

const UsersPage = ({loggedUser}) => {
    return(
        <Container>
            <h1>Users' list</h1>
            <UsersList loggedUser={loggedUser}/>
        </Container>
    )
}

export default UsersPage