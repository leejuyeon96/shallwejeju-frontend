import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
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
    padding: 0 3rem;
    height: 100%;
    text-align: center;
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
  .login-overlay-btn {
    //   background-color: #ff4b2b;
    //   color: #fff;
    //   box-shadow: -5px -5px 10px #ff6b3f, 5px 5px 8px #bf4b2b;
    background: #eee;
    box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
    //
  }
  .signup-overlay-btn {
    //   background-color: #ff4b2b;
    //   color: #fff;
    //   box-shadow: -5px -5px 10px #ff6b3f, 5px 5px 8px #bf4b2b;
    background: #eee;
    box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
    //
  }
  .login-container {
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    transition: all 0.5s;
  }
  .signup-container {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    opacity: 0;
    transition: all 0.5s;
  }
  .overlay {
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    opacity: 0;
    background-color: #ff4b2b;
    color: #fff;
    transition: all 0.5s;
  }
  .overlay__panel {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 50%;

  }
  .container.container.right-panel-active .overlay {
    transform: translateX(50%);
  }
  .overlay-right{
    transform: translateX(20%);

  }
  
  .container.right-panel-active .login-container {
    transform: translateX(100%);
    
  }
  .container.right-panel-active .signup-container {
    animation: show 0.6s;
    opacity: 1;
    transform: translateX(100%);
    z-index: 5;
  }
  .container.right-panel-active .overlay-right {
    transform: translateX(20%);
   
  }
  .overlay-right{
    right: 0;
    transform: translateX(0);

  }
  .overlay-left {
    transform: translateX(-20%);
  }
  .container.right-panel-active .overlay-left {
    transform: translateX(0);
   
    
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

`;

const LoginSignup = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handlePanelToggle = () => {
    setIsRightPanelActive((prev) => !prev);
  };

  const handleSignUpClick = () => {
    console.log("Signup button clicked");
    setIsRightPanelActive(true);
  };


  const handleLogInClick = () => {
    
    setIsRightPanelActive(false);
  };

  return (
    <StyleMain>
    <div className="wrapper">
      <img src={jeju}/>
      <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}>
        
      
        <div className="signup-container">
            <form>
              <h1>Create Account</h1>
              <input type="id" placeholder="Id" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit" className="form_btn">Sign Up</button>
            </form>
          </div>
          <div className="login-container">
            <form>
              <h1>Log In</h1>
              <br></br><br></br>
              
              <input type="id" placeholder="Id" />
              <input type="password" placeholder="Password" />
              <button type="submit" className="form_btn">Log In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay" >
                <div className="overlay__panel overlay-left">
                <h1>Welcome Back</h1>
                <p>
                  To keep connected with us, please login with your personal info
                </p>
                <button
                  id="logIn"
                  className="login-overlay-btn"
                  onClick={handleLogInClick}>
                
                  Log In
                </button>
                </div>
          </div>	
            <div className="overlay">
                <div className="overlay__panel overlay-right">
                <h1>Hello</h1>
                <p>회원가입하여 멋진 제주 여행 일정을 만들어보세요</p>
                <button
                  id="signUp"
                  className="signup-overlay-btn"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </button>
                </div>
              </div>
          </div>
      </div>
    </div>
    </StyleMain>
  );
};

export default LoginSignup;
