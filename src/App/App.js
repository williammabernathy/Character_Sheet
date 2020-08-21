import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from '../Components/Home/Home';
import ControlPanel from '../Components/ControlPanel/ControlPanel';
import Login from '../Components/Login/Login';
import Account from '../Components/Account/Account';
import Chat from '../Components/Chat/Chat';

const App = () => {
  return (
    <div className="appWrapper">
      <Router>

        <Navbar className="navBar" variant="dark">
          <Navbar.Brand href="/">D&D Playground</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/controlpanel">Control Panel</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link  href="/account">Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/controlpanel' component={ControlPanel}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/account' component={Account}></Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
