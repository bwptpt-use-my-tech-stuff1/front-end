import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import SignUpForm from './components/authentication/SignUpForm';
import Login from './components/authentication/Login';
import Dashboard from './components/Dashboard';
import ProductRent from './components/ProductRent';
import AddListing from './components/AddListing';
import Profile from './components/Profile';
import OwnerListing from './components/OwnerListing';
import History from './components/History';

import UserProvider from './components/providers/UserProvider';
import TechProvider from './components/providers/TechProvider';

import './App.css';

function App() {
  return (
    <UserProvider>
      <TechProvider>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/sign_up' component={SignUpForm} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/rent_product' component={ProductRent} />
            <Route path='/add_listing' component={AddListing} />
            <Route path='/profile' component={Profile} />
            <Route path='/my_listings' component={OwnerListing} />
            <Route path='/history' component={History} />
          </Switch>
        </div>
      </TechProvider>
    </UserProvider>
  );
}

export default App;
