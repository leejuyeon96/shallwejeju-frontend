import styled from "styled-components";
import "../fonts/font.css";
// import logo from "../assets/Untitled.jpg";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  .header-start {
    // img {
    //   margin-left: 1px;
    //   width: 200px;
    //   height: 70px;
    
    // }
    h1 {
      font-family: "JoSefinSlab";
      font-size: 25px;
      font-weight: bolder;
      letter-spacing: 2px;
    }

   
    }
    
  


  .header-center a {
    
      text-decoration: none;
      padding: 28px;
      color: rgb(10, 10, 85);
      align-items: center;
      font-family: "Yeongdeok";
      font-size: 16px;  
    }

  .header-center a:hover {
     color: coral;
}
  
  .header-end {
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
        <h1>Shell We Jeju?</h1>
      </div>

      <div className="header-center">
        <a href="/">홈</a>
        <a href="/PlaceList">어떤 여행을 할까?</a>
        <a href="#">우리의 여행</a>
        <a href="/MyPage">마이페이지</a>
      </div>
      <div className="header-end">
        <a href="/Login">LogIn</a>
        <a href="/Signup">JoinUs</a>
      </div>
    </StyledHeader>
  );
};
export default Header;
