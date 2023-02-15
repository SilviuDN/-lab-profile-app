import { Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './UsersPage.css'

const UserCard = ({username, _id, image, campus, course}) => {
    return(
        <Col md={4}>
            <Card className='userCard'>
            <Card.Img variant="top" src={image} alt={username}/>
            <Card.Body>
                <Card.Title>User: {username}</Card.Title>
                <Card.Text>
                    <>Campus: {campus}</>
                    <br></br>
                    <>Course: {course}</>
                </Card.Text>
                <Link to={`/users/details/${_id}`}>
                    <Button variant="dark" size="lg">Details</Button>
                </Link>
                
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