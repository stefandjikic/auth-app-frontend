import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import AuthService from '../../services/authService';
import {
  removeUserAuthAction,
  setUserAuthAction,
} from '../../store/actions/authActions';

const HomePage = () => {
  const userStore = useSelector((store) => store.userStore);
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (AuthService.getUserData() === null) {
      history.push('/login');
    }
    if (userStore) {
      dispatch(setUserAuthAction(AuthService.getUserData()));
    }
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, [history, dispatch]);

  const handleLogout = () => {
    AuthService.logout();
    dispatch(removeUserAuthAction());
    history.push('/login');
  };

  return (
    <div className='container py-3 text-center'>
      <h2>Hello {userStore.name}</h2>
      <p>It is {currentTime.toLocaleString()}</p>
      <button className='btn btn-danger my-3' onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  );
};

export default HomePage;
