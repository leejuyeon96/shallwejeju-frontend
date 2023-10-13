import styled from "styled-components";
// import React from "react";
import "../fonts/font.css";


const StyledMain = styled.main`

  video {
    width: 100%;
    height: 50%;
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
  .text p {
    text-align: center;
    font-size: 70px;
    color: white;
    font-family: "JosefinSlab";
    font-weight: bold;
    
    text-shadow: 0 0 .1em, 0 0 .4em;
  }
`;
const StyledFooter = styled.footer`
  video {
    width: 100%;
    height: 100%
    object-fit: cover;
  }
  * {
  padding: 0px;
  margin: 0px;
}
 .text {
  position: relative;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

 h3 {
  color: white;
  text-align: center;
  font-size: 50px;
  font-family: "JosefinSlab";
  font-weight: bold;
}
 
 
}
`;

const Home = () => {
  return (
    <>
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
  
    <StyledFooter>
      <video muted autoPlay loop>
        <source src="/videos/beach_-_7268 (720p).mp4" type="video/mp4"></source>
      </video>
      <div className="text">
        <h3>About Us</h3>
      </div>
    </StyledFooter>
    </>
  );
};

export default Home;
