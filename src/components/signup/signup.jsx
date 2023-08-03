import React from "react";
import BackGround from "../../asset/img/background_f.svg";
import Raon from "../../asset/img/Raon.svg";
import * as S from "./signup.style";

function Singup() {
  return (
    <>
      <S.Img src={BackGround}></S.Img>
      <S.Back></S.Back>
      <S.Logo src={Raon}></S.Logo>
      <S.Id>아이디</S.Id>
      <S.Raund_Id></S.Raund_Id>
      <S.Search>학교 이름</S.Search>
      <S.Raund_Search></S.Raund_Search>
      <S.Pw>비밀번호</S.Pw>
      <S.Raund_Pw></S.Raund_Pw>
      <S.Pw_Check>비밀번호 확인</S.Pw_Check>
      <S.Raund_Pw_Check></S.Raund_Pw_Check>
      <S.Signup_></S.Signup_>
      <S.Signupt>회원가입</S.Signupt>
      <S.Yes>이미 계정이 있으신가요?</S.Yes>
      <S.Login>로그인</S.Login>
    </>
  );
}
export default Singup;
