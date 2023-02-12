import { Col, Card, Button } from "react-bootstrap"
import './UsersPage.css'

const UserCard = ({username, _id, image, campus, course}) => {
    return(
        <Col md={4} key={_id}>
            <Card className='userCard'>
            <Card.Img variant="top" src={image} alt={username}/>
            <Card.Body>
                <Card.Title>User: {username}</Card.Title>
                <Card.Text>
                    <p>Campus: {campus}</p>
                    <p>Course: {course}</p>
                </Card.Text>
                <Button variant="dark" size="lg">Details</Button>
            </Card.Body>
            </Card>



            {/* <article className="userCard">
                <img src={image} alt={username} />
                <h3>{username}</h3>
            </article> */}

            
        </Col>
    )

}




export default UserCard