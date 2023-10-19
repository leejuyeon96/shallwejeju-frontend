import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 20px;
`;

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const password = e.target.password.value;

    // 여기에서 로그인 처리 논리를 추가하고, 필요한 라우팅을 수행
    // 예를 들어, 서버 요청을 보내거나 로컬 상태를 업데이트하고, navigate로 페이지 이동

    if (id === "사용자아이디" && password === "비밀번호") {
      // 로그인이 성공한 경우, 원하는 경로로 이동
      navigate("/Home");
    } else {
      // 로그인 실패 또는 오류 처리
      alert("로그인에 실패하였습니다.");
    }
  };

  return (
    <Container>
      <H1>로그인</H1>
      <Form onSubmit={onSubmit} style={{ width: "600px", margin: "0 auto" }}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="아이디 입력" name="id" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="비밀번호 입력"
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="submit" value="로그인" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;