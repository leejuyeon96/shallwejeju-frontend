import React, { useState } from "react";
import styled from "styled-components";
// import 'font-awesome/css/font-awesome.min.css';
import jeju from "../assets/jeju-island-1063203_1280.jpg";

const StyleMain = styled.main`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
  }
  .wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
  }
  img {
    opacity: 0.5;
    width: 100%;
  }
  .container {
    border-radius: 10px;
    box-shadow: -5px -5px 10px #fff, 5px 5px 10px #babebc;
    position: absolute;
    width: 768px;
    min-height: 480px;
    overflow: hidden;
  }
  form {
    background: #ebecf0;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  form input {
    background: #eee;
    padding: 16px;
    margin: 8px 0;
    width: 85%;
    border: 0;
    outline: none;
    border-radius: 20px;
    box-shadow: inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff;
  }
  button {
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 12px;
    font-weight: bold;
    padding: 15px 45px;
    margin: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 80ms ease-in;
  }
  .form_btn {
    box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
  }
  .form_btn:active {
    box-shadow: inset 1px 1px 2px #babebc, inset -1px -1px 2px #fff;
  }
  .overlay_btn {
    //   background-color: #ff4b2b;
    //   color: #fff;
    //   box-shadow: -5px -5px 10px #ff6b3f, 5px 5px 8px #bf4b2b;
    background: #eee;
    box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
    //
  }
  .sign-in-container {
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    transition: all 0.5s;
  }
  .sign-up-container {
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
  }
  .overlay-left {
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    opacity: 0;
    background-color: #ff4b2b;
    color: #fff;
    transition: all 0.5s;
  }
  .overlay-right {
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    //   background-color: #FF8C00;
    color: #fff;
    transition: all 0.5s;
  }
  .container.right-panel-active .sign-in-container {
    transform: translateX(100%);
    opacity: 0;
  }
  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 2;
  }
  .container.right-panel-active .overlay-right {
    transform: translateX(-100%);
    opacity: 0;
  }
  .container.right-panel-active .overlay-left {
    transform: translateX(-100%);
    opacity: 1;
    z-index: 2;
  }
  .social-links {
    margin: 20px 0;
  }
  form h1 {
    font-weight: bold;
    margin: 0;
    color: #000;
  }

  p {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }
  span {
    font-size: 12px;
    color: #000;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
  }
  .social-links div {
    width: 40px;
    height: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    border-radius: 50%;
    box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
    cursor: pointer;
  }
  .social-links a {
    color: #000;
  }
  .social-links div:active {
    box-shadow: inset 1px 1px 2px #babebc, inset -1px -1px 2px #fff;
  }
`;

const LoginSignup = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    console.log("Signup button clicked");
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <StyleMain>
      <div className="wrapper">
        <img src={jeju}></img>
        <div
          className={`container ${
            isRightPanelActive ? "right-panel-active" : ""
          }`}
        >
          <button
            id="signUp"
            className="overlay_btn"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
          <button
            id="signIn"
            className="overlay_btn"
            onClick={handleSignInClick}
          >
            Sign In
          </button>
        </div>
        <div className="container">
          <div className="sign-up-container">
            <form>
              <h1>Create Account</h1>

              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button className="form_btn">Sign Up</button>
            </form>
          </div>
          <div className="sign-in-container">
            <form>
              <h1>Sign In</h1>

              <span>or use your account</span>
              <input type="id" placeholder="Id" />
              <input type="password" placeholder="Password" />
              <button className="form_btn">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay-left">
              <h1>Welcome Back</h1>
              <p>
                To keep connected with us, please login with your personal info
              </p>
              <button
                id="signIn"
                className="overlay_btn"
                onClick={handleSignUpClick}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-right">
              <h1>Hello</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button
                id="signUp"
                className="overlay_btn"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyleMain>
  );
};

export default LoginSignup;
