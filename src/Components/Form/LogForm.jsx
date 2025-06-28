import React, { useState } from 'react';
import './Form.css'
const LogForm = ({ switchToRegister }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateLogin = () => {
    const newErrors = {};
    if (!/^[0-9]{10}$/.test(mobile)) newErrors.mobile = 'Enter a valid 10-digit mobile number';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validateLogin()) return;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.mobile === mobile && u.password === password);
    setMessage(user ? 'Login successful!' : 'Invalid credentials');
  };

  return (
    <div className="register-box">
      <h3 style={{color:'#1A1A1A'}}>Login</h3>
      <input type="text" placeholder="Mobile Number" value={mobile} onChange={e => setMobile(e.target.value)} />
      {errors.mobile && <small style={{ color: 'red' }}>{errors.mobile}</small>}
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
      <p>Don't have an account? <span className="link" onClick={switchToRegister}>Register</span></p>
    </div>
  );
};

export default LogForm;