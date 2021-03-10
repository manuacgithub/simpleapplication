import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavbarBootstrap from './components/NavbarBootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <NavbarBootstrap />
          <Switch>
            <Route path='/' exact />
          </Switch>
      </Router>
    </>
  );
}

export default App;
