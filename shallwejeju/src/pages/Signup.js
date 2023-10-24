import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../fonts/font.css";
import styled from "styled-components";
import orange from "../assets/orange-5162818_1280 (1).jpg";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const StyleMain = styled.main`
  .background {
    position: relative;
    img {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      opacity: 0.4;
    }
    .signup-box {
      
      background-color: white;
      position: absolute;
      width: 500px;
      height: 600px;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.8;
    }
    .form {
      text-align: center;
      
    }
    .form input {
      width: 230px !important;
      text-align: center;
      border: 1px solid;
      box-sizing: border-box;
      margin-bottom: 20px;
      min-width: 200px;
    }
    input::placeholder{
      font-family: "YeongDeok";
    }
    h1 {
      font-family: "Space";
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 35px;
      text-align: center;
      font-weight: bolder;
      letter-spacing: 2px;
    }
    button {
      margin-top: 20px;
    }
    .link-login {
      margin-top: 40px;
      
    }
    p {
      margin-bottom: 10px;
    }
    .tologin {
      font-family: "Space";
      margin-left: 10px;
    }
    span {
      font-family: "YeongDeok";
    }
  
  }
`;

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!formData.id || !formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("필수 입력값을 모두 입력하세요.");
      return;
    }

    try {
      // 회원 가입 데이터를 정의합니다
      const signupData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };

      // Axios를 사용하여 서버로 POST 요청을 보냅니다.
      const response = await axios.post("/api/Signup", signupData);

      // 필요에 따라 응답을 처리합니다
      if (response.status === 200) {
        alert("회원가입이 성공했습니다.");
        // 사용자를 다른 페이지로 리디렉션합니다 (예: '/dashboard')
        navigate("/Home");
      } else {
        // 에러를 처리하거나 적절한 메시지를 표시합니다
        alert("회원가입에 실패했습니다.");
      }
    } catch (error) {
      // 네트워크 또는 기타 에러를 처리합니다
      console.error("에러:", error);
    }
  };

  return (
    <StyleMain>
      <div className="background">
        <img src={orange} />
        <div className="signup-box">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Join Us</h1>
            <div>
            <p>ID*</p>
              <input
                type="text"
                name="id"
                placeholder="아이디"
                value={formData.id}
                onChange={handleChange}
              />
            </div>
            <div>
              <p>NAME*</p>
              <input
                type="text"
                name="username"
                placeholder="사용자 이름"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <p>EMAIL*</p>
              <input
                type="email"
                name="email"
                placeholder="이메일"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <p>PASSWORD*</p>
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <p>CONFIRM-PASSWORD*</p>
              <input
                type="password"
                name="confirmPassword"
                placeholder="비밀번호 확인"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-outline-secondary" type="submit">
              Join Us
            </button>
            <div className="link-login">
            <span>
              이미 계정이 있으신가요? <Link to="/Login" className="tologin">Log In</Link>
            </span>
            </div>
          </form>
        </div>
      </div>
    </StyleMain>
  );
};

export default Signup;
