import UsersList from "./UsersList"
import {Container} from 'react-bootstrap'

const UsersPage = () => {
    return(
        <Container>
            <h1>Users' list</h1>
            <UsersList/>
        </Container>
    )
}

export default UsersPage