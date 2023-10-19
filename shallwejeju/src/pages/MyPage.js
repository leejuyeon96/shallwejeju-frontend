import styled from "styled-components";
import "../fonts/font.css";
// import "../resources/profileImg.jpg";
import React from "react";

const StyleMain = styled.main`
  .text {
    margin-top: 28px;
    background-color: #dcdcdc;
    height: 80px;

    p {
      height: 50px;
      line-height: 70px;
      display: flex;
      margin-left: 50px;
      font-family: "Orbit";
      font-size: 20px;
      font-weight: bolder;
    }
  }
  .profileImg {
    border-radius: 50%;
  }
`;
const MyPage = () => {
  return (
    <StyleMain>
      <div className="text">
        <p>마이페이지</p>
      </div>
      {/* <div className="profile-photo">{img}</div>
      <div className="profile-name">{name}</div> */}
    </StyleMain>
  );
};

export default MyPage;
