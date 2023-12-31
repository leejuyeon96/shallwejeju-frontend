import styled from "styled-components";
// import React from "react";
import "../fonts/font.css";

const StyledMain = styled.main`
  .first-background {
    width: 100%;
    height: 800px;
    
    margin: 0px auto;
    position: relative;
  }
  video {
    width: 100%;
    object-fit: cover;
  }

  * {
    padding: 0px;
    margin: 0px;
  }

  .text {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // letter-spacing: 8px;
  }
  .text p {
    text-align: center;
    font-size: 70px;
    color: white;
    font-family: "JosefinSlab";
    font-weight: bold;

    text-shadow: 0 0 0.1em, 0 0 0.4em;
  }

  .second-background {
    width: 100%;
    height: 800px;
    background: inherit;
    margin: 0px auto;
    position: relative;

    video {
      width: 100%;
      height: 800px;
    }
    .discription {
      position: absolute;
      width: 400px;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -70%);
    }

    .discription p {
      color: white;
      text-align: center;
      font-size: 60px;
      font-family: "JosefinSlab";
      font-weight: bold;
      padding-bottom: 100px;
    }

    .discription-box {
     border: 2px solid white;
      margin: 0 auto;
      width: 800px;
      height: 200px;
      position: relative;
      top: -340px;
      text-align: center;
    }
    .discription-box p {
      padding: 5px 10px;
      color: whitesmoke;
      top: 100%;
      left: 50%;
      font-family: "GangWon";
      font-size: 25px;
      transform: translate(-1%, 100%);
      font-weight: lighter;
    }
  }
`;

const Home = () => {
  return (
    <>
      <StyledMain>
        <div className="first-background">
          <video muted autoPlay loop>
            <source
              src="/videos/\KakaoTalk_20231025_190742353.mp4"
              type="video/mp4"
            ></source>
          </video>
          <div className="text">
            <p>Shall We Jeju?</p>
          </div>
        </div>
        <div className="second-background">
          <video muted autoPlay loop>
            <source
              src="/videos/beach_-_7268 (720p).mp4"
              type="video/mp4"
            ></source>
          </video>
          <div className="discription">
            <p>About Us</p>
          </div>
          <div className="discription-box">
            <p>
              우리 사이트는 제주도 여행계획을 여행메이트들과 일정을 짜며 공유할
              수 있도록 만들어졌습니다. <br/> 멋진 제주 여행에서 소중한 추억을 쌓으세요.
            </p>
          </div>
        </div>
      </StyledMain>
    </>
  );
};

export default Home;
