import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/store';
import LoginPage from './pages/auth-pages/LoginPage';
import SignupPage from './pages/auth-pages/SignupPage';
import Navbar from './components/Navbar';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={HomePage} />
        <Route path='/signup' component={SignupPage} />
        <Route path='/login' component={LoginPage} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
