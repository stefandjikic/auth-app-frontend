import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import LoginPage from './pages/auth-pages/LoginPage';
import SignupPage from './pages/auth-pages/SignupPage';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    axios.get('/data').then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
    </BrowserRouter>
  );
}

export default App;
