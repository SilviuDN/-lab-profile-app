import axios from 'axios'

class UsersService{

    constructor(){
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/users'
        })
    }

    getUsers = () => this.app.get('/')
    // getUser = user_id => this.app.get(`/getUser/${user_id}`)
    // postUser = user_info => this.app.post('/newUser', user_info)
    // updateUser = user_info => this.app.put(`/newUser/${user_id}`, user_info)

}

export default UsersService