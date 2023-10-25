import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  flex-direction: column;

  
  
  .mark {
    margin-bottom: 10px;
    text-align: center;
    
  }
  .copyright {
    text-align: center;
    font-size: 10px;
   
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="mark">
        <p>SHALL WE JEJU</p>
      </div>  
      <div className="copyright">
        <p>Copyright By Lee Juyeon, Kim Hyeonbin</p>
      </div>
    </StyledFooter>
  );
};
export default Footer;
