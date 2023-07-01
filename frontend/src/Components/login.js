import React, { useState } from 'react';
import './login.css'
import logo from '../Images/logo.png'

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here (e.g., API call, authentication)

    // Clear form inputs after login attempt
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <img className='logo' src={logo} alt="Logo" />
      <div className='container'>   
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit} className='login'>
          <div className='email'>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='password'>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button id='signin' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;