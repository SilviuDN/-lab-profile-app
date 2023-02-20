import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyRoutes from './routes'
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import { Component } from 'react';
import AuthService from '../services/auth.service';
import Alert from './shared/Alert';

class App extends Component {

  constructor(){
    super()
    this.state = { 
      loggedUser: false,
      alert: { show: false, text: '' }
    }
    this.authService = new AuthService()
  }

  storeUser = user => this.setState({ loggedUser: user})

  fetchUser = ()  => {
    this.authService
      .isLoggedIn()
      .then( loggedUser => this.storeUser( loggedUser.data ))
      .catch( () => this.storeUser(undefined) )
  }
  
  showAlert = text => this.setState({ alert: { show: true, text } })

  componentDidMount = () => {
    this.state.loggedUser === false && this.fetchUser() // the initial logical condition is not necessary because componentDidMount would only run once, but it avoids returning an initial exception in the console
  }

  render(){    
    return (
      <>
        <Navigation storeUser={this.storeUser} loggedUser={this.state.loggedUser} showAlert={this.showAlert}/>
        <MyRoutes storeUser={this.storeUser} loggedUser={this.state.loggedUser} showAlert={this.showAlert}/>
        <Alert show={this.state.alert.show} text={this.state.alert.text} closeAlert={() => this.setState({ alert: { ...this.state.alert, show: false } })} />
        <Footer/>
      </>
    );
  }


}

export default App;
