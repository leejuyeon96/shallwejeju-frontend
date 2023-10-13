import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-start {
    font-family: "Josefin Slab";
    color: rgb(10, 10, 85);
    text-decoration: none;
  }

  .header-center {
    a {
      text-decoration: none;
      padding: 15px;
      color: rgb(10, 10, 85);
      align-items: center;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-start">
        <h2>Shall We Jeju?</h2>
      </div>

      <div className="header-center">
        <a href="#">홈</a>
        <a href="#">어떤 여행을 할까?</a>
        <a href="#">우리의 여행</a>
        <a href="#">같이 놀아요</a>
        <a href="#">마이페이지</a>
      </div>
      <div className="header-end"></div>
    </StyledHeader>
  );
};
export default Header;
