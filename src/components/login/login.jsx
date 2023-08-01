import React from "react";
import BackGround from "../../asset/img/background_f.svg";
import * as L from "./login.style";

function Login() {
  return (
    <>
      <L.Img src={BackGround}></L.Img>
      <L.Back></L.Back>
      <L.Logo>Raon</L.Logo>
    </>
  );
}
export default Login;
