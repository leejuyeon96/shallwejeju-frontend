import styled from "styled-components";

const StyledHeader = styled.header`
 
    display: flex;
    justify-content: space-between;
    align-items: center;
  
  
    .header-start {
        font-family: Josefin Slab;
        color: white;
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
                <a href="#">
                <h2 style={{}}>Shall We Jeju?</h2>
                </a>
            </div>

            <div className="header-center">
                <a href="#">홈</a>
                <a href="#">홈</a>
                <a href="#">홈</a>
                <a href="#">홈</a>
            </div>
            <div className="header-end">

            </div>
        </StyledHeader>
    );
};
export default Header;