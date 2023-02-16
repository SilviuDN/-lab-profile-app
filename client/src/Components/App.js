import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyRoutes from './routes'
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';

function App() {
  return (
    <>
      <Navigation/>
      <MyRoutes/>
      <Footer/>
    </>
  );
}

export default App;
