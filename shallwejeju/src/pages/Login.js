import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import orange from "../assets/orange-5162818_1280 (1).jpg";

const StyleMain = styled.main`
  img{
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }
  .background {
    position: relative;
  }
  .login-box {
    background-color: white;
    position: absolute;
    width: 500px;
    height: 400px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.8;
  }
  h1 {
    font-family: "Space";
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 35px;
    font-weight: bolder;
    letter-spacing: 2px;
  }
  .form {
    text-align: center;
  }
  .form input {
    width: 210px;
    text-align: center;
    margin-top: 15px;
    min-width: 200px;
    margin-bottom: 20px;
    box-sizing: border-box;
    border: 1px solid;
  }
  input::placeholder{
    font-family: "YeongDeok";
  }
  button {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .tosignup {
    font-family: "Space";
    margin-left: 10px;
  }
  span{
    font-family: "YeongDeok";
    margin-top: 10px;
  }
  p{
    // font-family: "Space";
    margin-top: 5px;
    font-size:16px;
  }
`;



const Login = () => {

  const [formData, setFormData] = useState({
    id: "", // 사용자 이름
    password: "", // 비밀번호
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = formData.id;
    const password = formData.password;

    // 여기에서 로그인 처리 논리를 추가하고, 필요한 라우팅을 수행
    // 예를 들어, 서버 요청을 보내거나 로컬 상태를 업데이트하고, navigate로 페이지 이동
  

    if (id === "사용자아이디" && password === "비밀번호") {
      // 로그인이 성공한 경우, 원하는 경로로 이동
      navigate("/Home");
    } else {
      // 로그인 실패 또는 오류 처리
      alert("로그인에 실패하였습니다.");
    }
  };

  return (
    <StyleMain>
      <div className="background">
        <img src={orange}/>
        <div className="login-box">
          <form className="form" onSubmit={handleSubmit}>
          <h1>Log In</h1>
            <div>
              <p>ID</p>
              <input
                type="text"
                name="id"
                placeholder="아이디"
                value={formData.id}
                onChange={handleChange}
              />
            </div>
            <div>
              <p>PASSWORD</p>
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-outline-secondary" type="submit">Login</button>
            <div className="link-signup">
              <span>
                계정이 없으신가요? <Link to="/Signup" className="tosignup">Sign Up</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </StyleMain>
  );
};

export default Login;