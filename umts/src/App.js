import React from 'react';
import { Route } from 'react-router-dom';

import WelcomePage from './components/WelcomePage';

import UserProvider from './components/providers/UserProvider';

import './App.css';

function App() {
  return (
    <UserProvider>
      <div className='App'>
        <Route exact path='/' component={WelcomePage} />
      </div>
    </UserProvider>
  );
}

export default App;
