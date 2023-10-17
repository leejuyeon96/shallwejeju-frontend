import styled from "styled-components";
import "../fonts/font.css";

const StyleMain = styled.main`
  .text {
    background-color: #dcdcdc;
    height: 50px;
    p {
      margin-top: 31px;
      margin-left: 50px;
      font-family: "Orbit";
      font-size: 20px;
      font-weight: bolder;
    }
  }
`;
const MyPage = () => {
  return (
    <StyleMain>
      <div className="text">
        <p>마이페이지</p>
      </div>
    </StyleMain>
  );
};

export default MyPage;
