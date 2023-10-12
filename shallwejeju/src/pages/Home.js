import styled from "styled-components";
// import React from "react";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import React, { useRef } from "react";

const StyledAside = styled.aside`
  display: none;
  position: fixed;
  background-color: white;
  width: 70px;
  overflow-y: auto;
  height: 100%;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;
const StyledHome = styled.div`
  video {
    border-radius: 15px;
    height: 220px;
    object-fit: cover;
  }
`;

const Home = () => {
  const videoRef = useRef(null);
  return (
    <StyledHome>
      <video ref={videoRef} src="../assets/sea_-_10816(720p).mp4"></video>
    </StyledHome>
  );
};

export default Home;
