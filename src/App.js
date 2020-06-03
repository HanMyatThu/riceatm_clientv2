import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom';
import HomePage from '../src/Components/HomePage';
import RegisterPage from '../src/Components/RegisterPage';
import LoginPage from '../src/Components/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './_helpers/history';
import './App.css'

function App() {
  return (
    <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
