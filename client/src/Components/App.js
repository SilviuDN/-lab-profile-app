import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyRoutes from './routes'
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import { Component } from 'react';
import AuthService from '../services/auth.service';


class App extends Component {

  constructor(){
    super()
    this.state = { loggedUser: false }
    this.authService = new AuthService()
  }

  storeUser = user => this.setState({ loggedUser: user})

  fetchUser = ()  => {
    this.authService
      .isLoggedIn()
      .then( loggedUser => this.storeUser( loggedUser.data ))
      .catch( () => this.storeUser(undefined) )
  }

  componentDidMount = () => {
    this.state.loggedUser === false && this.fetchUser() // the initial logical condition is not necessary because componentDidMount would only run once, but it avoids returning an initial exception in the console
  }

  render(){    
    return (
      <>
        <Navigation storeUser={this.storeUser} loggedUser={this.state.loggedUser}/>
        <MyRoutes storeUser={this.storeUser} loggedUser={this.state.loggedUser}/>
        <Footer/>
      </>
    );
  }


}

export default App;
