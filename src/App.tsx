import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createBrowserHistory } from 'history';
import NavigationBar from './components/NavigationBar/';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Logout from './components/Logout/';
import HomePage from './components/HomePage/';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';
import UserPage from './components/UserPage/';
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
            <ProtectedRoute exact path="/me" component={UserPage} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/notfound" component={NotFound} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
