import React, { useState } from "react";
import BackGround from "../../asset/img/background_f.svg";
import Raon from "../../asset/img/Raon.svg";
import * as L from "./login.style";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [IDinput, setIDinput] = useState("");
  const [test_ID, settest_ID] = useState("testid");
  const [PWinput, setPWinput] = useState("");
  const [test_PW, settest_PW] = useState("testpw");

  const test = (event) => {
    event.preventDefault();
    // 입력된 값과 기존 값 비교
    if (test_ID === IDinput) {
      window.alert("로그인 성공");
    } else {
      window.alert("로그인 실패");
    }
  };

  return (
    <>
      <L.All>
        <L.Img src={BackGround}></L.Img>
        <L.Back></L.Back>
        <L.Logo src={Raon}></L.Logo>
        <L.Id>아이디</L.Id>
        <L.Raund placeholder="ID" value={IDinput}></L.Raund>
        <L.Pw>비밀번호</L.Pw>
        <L.Raund_ type="password" placeholder="PW" value={PWinput}></L.Raund_>
        <L.Login_ onClick={() => navigate("/main")} alt="">
          로그인
        </L.Login_>
        <L.No>계정이 없으신가요?</L.No>
        <L.SignUp onClick={() => navigate("/signup")} alt="">
          회원가입
        </L.SignUp>
      </L.All>
    </>
  );
}
export default Login;
