import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/signup.jpg';

const initialState = {
  fullName: '',
  userName: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  avatarURL: '',
}

const Auth = () => {

  const [form, setForm] = useState(initialState)
  const [isSignup, setIsSignup] = useState(true);

  const handleChange = (e) => {
    const newData = { ...form, [e.target.name]: e.target.value }
    setForm(newData);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  const switchModel = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  }

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </p>
          <form onSubmit={handleSubmit}>
            {isSignup &&
              (<div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={handleChange}
                />
              </div>)}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                onChange={handleChange}
              />
            </div>
            {isSignup &&
              (<div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
              </div>)}
            {isSignup &&
              (<div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL">Avatar URL</label>
                <input
                  type="text"
                  name="avatarURL"
                  placeholder="Avatar URL"
                  onChange={handleChange}
                />
              </div>)}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup &&
              (<div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
              </div>)}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? 'Sign Up' : 'Sign In'}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            {isSignup
              ? 'Already have an account?'
              : "Don't have an account?"
            }
            <span onClick={switchModel}>
              {isSignup ? 'Sign In' : 'Sign Up'}
            </span>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signinImage} alt="sign in" />
      </div>
    </div>
  )
}

export default Auth
