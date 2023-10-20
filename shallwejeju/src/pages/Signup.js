import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../fonts/font.css";
import styled from "styled-components";
import orange from "../assets/orange-5162818_1280 (1).jpg";

const StyleMain = styled.main`
  .background {
    position: relative;
    img {
      margin-top: 10px;
      width: 100%;
      height: 100%;
      opacity: 0.4;
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 회원가입 요청을 서버로 보내는 로직 추가
    // 여기에서는 단순하게 formData를 출력
    console.log(formData);

    // 회원가입 성공 시 다른 경로로 리디렉션
    // 예: navigate("/dashboard");
  };

  return (
    <StyleMain>
      <div className="background">
        <img src={orange} />
        <h1>Join Us</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="사용자 이름"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Join Us</button>
        </form>
        <p>
          이미 계정이 있으신가요? <Link to="/Login">Log In</Link>
        </p>
      </div>
    </StyleMain>
  );
};

export default Signup;
