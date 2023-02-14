import UsersPage from './../pages/UsersPage'
import IndexPage from './../pages/Index'
import UserDetails from './../pages/UserDetails'
import UserForm from '../pages/UserForm'
import {Switch, Route} from 'react-router-dom'

const MyRoutes = () => {
    return(
        <Switch>
            <Route path='/users/details/:user_id' render={(props) => <UserDetails {...props}/>} />
            <Route path='/users/newUser' render={() => <UserForm/>} />
            <Route path='/users' render={() => <UsersPage/>} />
            <Route path='/' render={() => <IndexPage/>} />
        </Switch>
    )
}

export default MyRoutes