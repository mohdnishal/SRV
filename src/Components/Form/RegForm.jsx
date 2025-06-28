import React, { useState } from 'react';
import './Form.css'
const RegForm = ({ switchToLogin }) => {
  const [company, setCompany] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};
    if (!company.trim()) newErrors.company = 'Company name is required';
    if (!/^[0-9]{10}$/.test(mobile)) newErrors.mobile = 'Enter a valid 10-digit mobile number';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email address';
    if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (!validateFields()) return;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(u => u.mobile === mobile)) {
      setMessage('Mobile number already registered');
      return;
    }
    users.push({ company, mobile, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    setMessage('Registration successful!');
    setCompany(''); setMobile(''); setEmail(''); setPassword('');
    setErrors({});
  };

  return (
    <div className="register-box">
      <h3 style={{ color: '#1A1A1A' }}>New Registration</h3>
      <input type="text" placeholder="Name of Company" value={company} onChange={e => setCompany(e.target.value)} />
      {errors.company && <small style={{ color: 'red' }}>{errors.company}</small>}
      <input type="text" placeholder="Mobile Number" value={mobile} onChange={e => setMobile(e.target.value)} />
      {errors.mobile && <small style={{ color: 'red' }}>{errors.mobile}</small>}
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
      <button onClick={handleRegister}>Submit</button>
      <p>{message}</p>
      <p>Already registered? <span className="link" onClick={switchToLogin}>Login</span></p>
    </div>
  );
};

export default RegForm;