import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useActions from '../hooks/useActions';
import { login } from '../actions/loginActions';

import Welcome from '../assets/images/Group_11.svg';
import Google from '../assets/images/google.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const loginState = useSelector((state) => state.loginState);
  const actions = useActions({ login });

  if (loginState.loggedIn) {
    return <Redirect to="/challenge" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => actions.login(), 2500);
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="welcome-wrapper col-md-3">
          <h1 className="h5 text-white mx-2">Welcome Back!</h1>
          <p className="text-white mt-3 mx-2">
            Login to access the handpicked challenges and see where you stand
            among your peers.
          </p>

          <img
            src={Welcome}
            alt="welcome illustration"
            className="img-fluid mx-auto mt-4"
          />
        </div>

        <div className="col-md-9 row">
          <div className="col-md-8 login-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="text-muted" htmlFor="email">
                  Email or Phone Number
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="text-muted" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="form-control"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  required
                />
              </div>

              <Link to="/" className="text-primary">
                Forgot Password?
              </Link>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block mt-3"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Login'}
              </button>
            </form>
          </div>

          <div className="vert-bar">
            <div className="bar" />

            <div className="text">OR</div>

            <div className="bar" />
          </div>

          <div className="col-md google-login">
            <p className="text-dark">Sign in using:</p>
            <img
              src={Google}
              className="img-fluid mb-auto"
              alt="Sign in using Google"
              width="160px"
            />

            <Link className="text-primary my-4" to="/signup">
              <span>
                New to Devsnest?
                <br />
                Create an account
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
