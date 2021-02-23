import React from 'react';
import Welcome from '../assets/images/Group_11.svg';
import Google from '../assets/images/google.svg';
import { Link, Redirect } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';

export default function Login() {
  const [userLogin, setUserLogin] = useState({ email: '', password: '' });
  const [isLogin, setIsLogin] = useState(false);
  if (isLogin) {
    return <Redirect to="/curriculum" />;
  }

  const handleChange = (event) => {
    setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-wrapper row">
      <div className="welcome-wrapper col-md-3 leftCtn">
        <div className="leftCtnText">
          <div id="left-heading">
            <h2
              style={{
                color: 'white',
                font: 'normal normal 600 20px/24px Montserrat',
              }}
            >
              Welcome Back!
            </h2>
          </div>
          <div id="left-para">
            <p
              style={{
                color: 'white',
                font: 'normal normal normal 16px/19px Montserrat',
                letterSpacing: '0px',
              }}
            >
              Login to access the handpicked challenges and see where you stand
              among your peers.
            </p>
          </div>
        </div>

        <div>
          <img
            src={Welcome}
            id="welcome-illustrator"
            alt="Welcome-illustrator"
            className="img-fluid mx-auto"
          ></img>
        </div>
      </div>

      <div className="login-form col-md-6 ">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange}
              value={userLogin.email}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handleChange}
              value={userLogin.password}
              required
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <Link style={{ color: '#8264B4' }}>Forgot Password?</Link>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block submit-btn"
          >
            Login
          </button>
        </form>
      </div>
      <div class="vertical-divider">or</div>
      <div className="google-wrapper col-md-2">
        <p>Sign in using :</p>
        <img
          src={Google}
          id="google-logo"
          className="img-fluid mx-auto my-auto"
          alt="Sign in using Google"
        ></img>
        <br />

        <Link
          style={{
            color: '#8264B4',
            fontSize: '16',
            position: 'relative',
            top: '25%',
          }}
        >
          {' '}
          <span>New to Devsnest? Create an account</span>
        </Link>
      </div>
    </div>
  );
}
