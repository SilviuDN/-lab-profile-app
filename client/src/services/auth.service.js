import axios from 'axios'

class AuthService{

    constructor(){
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    login = ({username, pwd}) => this.app.post(`/login`, {username, pwd})
    signup = ({username, email, pwd, campus, course, image}) => this.app.post(`/signup`, {username, email, pwd, campus, course, image})
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.post(`/isLoggedIn`)

}

export default AuthService