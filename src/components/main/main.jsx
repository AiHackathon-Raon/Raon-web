import React from "react";
import * as M from './main.style';
import Header from "../header/header";
import banner from "../../asset/img/banner.svg";
import sampleImg from "../../asset/img/sampleImg.svg";
import back from "../../asset/img/backButton.svg";
import next from "../../asset/img/nextButton.svg";

function Main() {
  return (
    <>
      <M.mainLayout>
        <Header></Header>
        <M.banner src={banner}></M.banner>
        <M.title>최신순</M.title>
        <M.writes>
          <M.WriteAreas>
            <M.backButton src={back}></M.backButton>
            <WriteArea></WriteArea>
            <WriteArea></WriteArea>
            <WriteArea></WriteArea>
            <WriteArea></WriteArea>
            <M.nextButton src={next}></M.nextButton>
          </M.WriteAreas>
        </M.writes>
      </M.mainLayout>
    </>
  );
}
function WriteArea() {
  return (
    <>
      <M.writeArea>
        <M.writeImg src={sampleImg}></M.writeImg>
        <M.writeTitle>글제목글제목글제목</M.writeTitle>
        <M.writer>글 작성자</M.writer>
        <M.detail>
          <M.like>좋아요 0개</M.like>
          1일 전
        </M.detail>
      </M.writeArea>
    </>
  );
}
export default Main;
