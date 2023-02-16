import {Button, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const IndexPage = () => {

    return(
        <Container>
            <h1>Welcome to the IndexPage!</h1>
            <hr></hr>
            <Link to="/users">
                <Button variant="dark" size="lg">All users</Button>
            </Link>
        </Container>
    )
}

export default IndexPage