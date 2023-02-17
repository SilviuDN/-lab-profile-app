import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyRoutes from './routes'
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super()
    this.state = { loggedUser: undefined }
  }

  storeUser = user => this.setState({ loggedUser: user})

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
