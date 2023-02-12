import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UsersPage from './pages/UsersPage';
import {Switch, Route} from 'react-router-dom'
import IndexPage from './pages/Index'

function App() {
  return (
    <Switch>
      <Route path='/users' render={() => <UsersPage/>} />
      <Route path='/' render={() => <IndexPage/>} />
    </Switch>
  );
}

export default App;
