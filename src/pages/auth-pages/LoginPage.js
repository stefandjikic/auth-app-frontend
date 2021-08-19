import React from 'react'

const LoginPage = () => {
  const handleLogin = () => {
    console.log('Login');
  };
  return (
    <div className="container text-center my-4">
    <h1>Login</h1>
    <div className="col-4 offset-4 mt-3">
      <input type="text" placeholder="username" className="form-control mb-3" />
      <input type="password" placeholder="password" className="form-control mb-3" />
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
  )
}

export default LoginPage