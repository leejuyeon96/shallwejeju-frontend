import styled from "styled-components";
// import React from "react";
import "../fonts/font.css";


const StyledMain = styled.main`
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  * {
    padding: 0px;
    margin: 0px;
  }

  .text {
    position: absolute;
    width: 100%;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .text p {
    text-align: center;
    font-size: 70px;
    color: white;
    font-family: "JosefinSlab";
  }
`;

const Home = () => {
  return (
    <StyledMain>
      <video muted autoPlay loop>
        <source
          src="/videos/KakaoTalk_20231012_191144896.mp4"
          type="video/mp4"
        ></source>
      </video>
      <div className="text">
        <p>Shall We Jeju?</p>
      </div>
    </StyledMain>
  );
};

export default Home;
