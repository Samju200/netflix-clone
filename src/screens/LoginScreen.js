import React, { useState } from 'react';
import './LoginScreen.css';
import SignupScreen from './SignupScreen';

function LoginScreen() {
  const [signup, setSignup] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="logo"
        />
        <button className="loginScreen_button" onClick={() => setSignup(true)}>
          {' '}
          Sign In
        </button>
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {signup ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen_input">
              <form action="">
                <input type="email" placeholder="Email" Address />
                <button
                  className="loginScreen_getStarted"
                  onClick={() => setSignup(true)}
                >
                  {' '}
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
