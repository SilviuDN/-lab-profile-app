import UsersPage from './../pages/UsersPage'
import IndexPage from './../pages/Index'
import UserDetails from './../pages/UserDetails'
import UserForm from '../pages/UserForm'
import {Switch, Route} from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import { Redirect } from 'react-router-dom'


const MyRoutes = ({storeUser, loggedUser, showAlert}) => {
    return(
        <Switch>
            <Route path='/users/details/:user_id' render={(props) => <UserDetails {...props}/>} />
            <Route path='/users/newUser' render={() => <UserForm/>} />
            <Route path='/users' render={() => <UsersPage loggedUser={loggedUser}/>} />
            <Route path='/signup' render={(props) => <Signup {...props}/>} />
            <Route path='/login' render={(props) => <Login {...props} storeUser={storeUser} showAlert={showAlert}/>} />
            <Route path='/user-profile' render={() => 
                loggedUser ? <Profile loggedUser={loggedUser}/> : <Redirect to="/users" />
            } />
            {/* <Route path='/user-profile' render={() => <Profile loggedUser={loggedUser}/>} /> */}
            <Route path='/' render={() => <IndexPage/>} />
        </Switch>
    )
}

export default MyRoutes