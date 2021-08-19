import React, { useState } from 'react';

const SignupPage = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleSignup = () => {
    console.log(state);
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
        <button className='btn btn-primary' onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
