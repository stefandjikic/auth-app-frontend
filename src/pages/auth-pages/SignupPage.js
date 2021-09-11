import React, { useState } from 'react';
import { useHistory } from 'react-router';
import AuthService from '../../services/authService';

const SignupPage = () => {
  const history = useHistory();
  const [notification, setNotification] = useState('');
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleSignup = () => {
    const { username, password } = state;
    if (username.length < 4 || password.length < 4) {
      setNotificationFunction('Username and password must contain at least 4 characters');
    } else {
      AuthService.signup(state).then((res) => {
        console.log(res.data);
        if (res.data === 'OK') {
          history.push('/');
        } else {
          history.push('/signup');
        }
      });
    }
  };

  const setNotificationFunction = (notification) => {
    setNotification(notification);
    if(notification !== '') {
      setTimeout(() => setNotification(''), 3000);
    }
  };

  return (
    <div className='container text-center my-4'>
      <h1>Sign Up</h1>
      <div className='col-4 offset-4 mt-3'>
        <input
          type='text'
          placeholder='username'
          className='form-control mb-3'
          value={state.username}
          onChange={(e) => setState({ ...state, username: e.target.value })}
        />
        <input
          type='password'
          placeholder='password'
          className='form-control mb-3'
          value={state.password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        {notification !== '' && (
          <div class="alert alert-danger" role="alert">
          {notification}
        </div>
        )}
        <button className='btn btn-primary' onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
