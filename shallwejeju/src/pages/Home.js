import styled from "styled-components";
// import React from "react";
import "../fonts/font.css";


const StyledMain = styled.main`

 .first-background video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-left: 0px;
  }

  * {
  padding: 0px;
  margin: 0px;
}


  .text {
    position: absolute;
    width: 100%;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .text p{
    text-align: center;
    font-size: 70px;
    color: white;
    font-family: "JosefinSlab";
    font-weight: bold;
    
    text-shadow: 0 0 .1em, 0 0 .4em;
  }

  .second-background {

    video {
      width: 100%;
      height: 100%
      object-fit: cover;
    }

    p {
      color: white;
      text-align: center;
      font-size: 50px;
      font-family: "JosefinSlab";
      font-weight: bold;
      top: 180%;
      left: 45%;
      position: absolute;
    } 

  }

.third-background video {
    width: 100%;
    height: 100%
    object-fit: cover;
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
            src="/videos/KakaoTalk_20231012_191144896.mp4"
            type="video/mp4"
          ></source>
        </video>
          <div className="text">
            <p>Shall We Jeju?</p>
          </div>
      </div>
      
      <div className="second-background">
        <video muted autoPlay loop>
          <source src="/videos/beach_-_7268 (720p).mp4" type="video/mp4"></source>
        </video>
        <p>About Us</p>
      </div>

      <div className="third-background">
        <video muted autoPlay loop>
          <source src="/videos/sea_-_10816 (720p).mp4" type="video/mp4"></source>
        </video>
      </div>
     
    </StyledMain>
    </>
  );
};

export default Home;
