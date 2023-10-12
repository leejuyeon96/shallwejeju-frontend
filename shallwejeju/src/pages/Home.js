import styled from "styled-components";
// import React from "react";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import React, { useRef } from "react";

const StyledMain = styled.main`
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  logo {
    
  }
`;

const Home = () => {
  return (
    <StyledMain>
      <video muted autoPlay loop>
        <source src="/videos/KakaoTalk_20231012_191144896.mp4" type="video/mp4"></source>
      </video>
      <logo
    </StyledMain>
  );
};


export default Home;
