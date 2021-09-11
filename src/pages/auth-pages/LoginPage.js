import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthService from '../../services/authService';
import { setUserAuthAction } from '../../store/actions/authActions';

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    if (AuthService.getUserData() !== null) {
      history.push('/');
    }
  }, [history, dispatch]);

  const handleLogin = () => {
    AuthService.login(state).then((res) => {
      if (res) {
        AuthService.setUserData(res.data);
        dispatch(setUserAuthAction(res.data));
        history.push('/');
      }
    });
  };
  return (
    <div className='container text-center my-4'>
      <h1>Login</h1>
      <div className='col-4 offset-4 mt-3'>
        <input
          type='text'
          placeholder='username'
          className='form-control mb-3'
          onChange={(e) => setState({ ...state, username: e.target.value })}
        />
        <input
          type='password'
          placeholder='password'
          className='form-control mb-3'
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <button className='btn btn-primary' onClick={handleLogin}>
          Login
        </button>
      </div>
      <p className='my-3'>
        You don't have an account? Sign up <Link to='/signup'>here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
