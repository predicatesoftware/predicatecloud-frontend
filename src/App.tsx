import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createBrowserHistory } from 'history';
import NavigationBar from './components/NavigationBar/index';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Logout from './components/Logout/index';
import HomePage from './components/HomePage/index';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <div className="App">
        <NavigationBar />
        <div className="content-container">
          <ToastContainer />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
