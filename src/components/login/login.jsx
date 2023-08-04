import React from "react";
import BackGround from "../../asset/img/background_f.svg";
import Raon from "../../asset/img/Raon.svg";
import * as L from "./login.style";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <L.All>
        <L.Img src={BackGround}></L.Img>
        <L.Back></L.Back>
        <L.Logo src={Raon}></L.Logo>
        <L.Id>아이디</L.Id>
        <L.Raund placeholder="ID"></L.Raund>
        <L.Pw>비밀번호</L.Pw>
        <L.Raund_ type="password" placeholder="PW"></L.Raund_>
        <L.Login_>로그인</L.Login_>
        <L.No>계정이 없으신가요?</L.No>
        <L.SignUp onClick={() => navigate("/signup")} alt="">
          회원가입
        </L.SignUp>
      </L.All>
    </>
  );
}
export default Login;
