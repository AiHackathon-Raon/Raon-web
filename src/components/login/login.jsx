import React from "react";
import BackGround from "../../asset/img/background_f.svg";
import Raon from "../../asset/img/Raon.svg";
import * as L from "./login.style";

function Login() {
  return (
    <>
      <L.Img src={BackGround}></L.Img>
      <L.Back></L.Back>
      <L.Logo src={Raon}></L.Logo>
      <L.Id>아이디</L.Id>
      <L.Raund></L.Raund>
      <L.Pw>비밀번호</L.Pw>
      <L.Raund_></L.Raund_>
      <L.Login_></L.Login_>
      <L.Logint>로그인</L.Logint>
      <L.No>계정이 없으신가요?</L.No>
      <L.SignUp>회원가입</L.SignUp>
    </>
  );
}
export default Login;
