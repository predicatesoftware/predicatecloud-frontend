import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createBrowserHistory } from 'history';
import NavigationBar from './components/NavigationBar/index';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import 'react-toastify/dist/ReactToastify.css';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <div className="App">
        <ToastContainer />
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/login" component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
