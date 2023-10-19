import styled from "styled-components";
import "../fonts/font.css";
import logo from '../assets/Untitled.jpg';



const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  .header-start {
    img {
      margin-left: 1px;
      width: 200px;
      height: 70px;
    
    }
    }
    
  }


  .header-center {
    a {
      text-decoration: none;
      padding: 28px;
      color: rgb(10, 10, 85);
      align-items: center;
      font-family: "Yeongdeok";
      
      
    }
  }
  .header-footer {
    a {
      font-family: "Yeongdeok";
      color: rgb(10, 10, 85);
      padding: 5px;
      text-decoration: none;
      margin-right: 30px;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-start">
        <img src={logo}/>
      </div>

      <div className="header-center">
        <a href="/">홈</a>
        <a href="#">어떤 여행을 할까?</a>
        <a href="#">우리의 여행</a>
        <a href="#">같이 놀아요</a>
        <a href="/MyPage">마이페이지</a>
      </div>
      <div className="header-footer">
        <a href="/Login">LogIn</a>
        <a href="#">JoinUs</a>
      </div>
    </StyledHeader>
  );
};
export default Header;
