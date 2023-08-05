import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "./main.style";
import Header from "../header/header";
import banner from "../../asset/img/banner.svg";
import writingImg from "../../asset/img/writingImg.svg";
import back from "../../asset/img/backButton.svg";
import next from "../../asset/img/nextButton.svg";

function Main() {
  const totalWriteAreas = 17; // 전체 WriteArea 개수
  const writeAreasPerPage = 4; // 한 페이지에 보여질 WriteArea 개수

  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지

  // 이전 페이지
  const goToPrevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0
        ? Math.ceil(totalWriteAreas / writeAreasPerPage) - 1
        : prevPage - 1
    );
  };

  // 다음 페이지
  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === Math.ceil(totalWriteAreas / writeAreasPerPage) - 1
        ? 0
        : prevPage + 1
    );
  };

  // WriteArea 컴포넌트 생성
  const generateWriteAreas = () => {
    const startIndex = currentPage * writeAreasPerPage;
    const endIndex = Math.min(startIndex + writeAreasPerPage, totalWriteAreas);
    const writeAreas = [];

    for (let i = startIndex; i < endIndex; i++) {
      writeAreas.push(<WriteArea key={i} />);
    }

    return writeAreas;
  };

  return (
    <>
      <M.mainLayout>
        <Header></Header>
        <M.banner src={banner}></M.banner>
        <writingLayout>
          <M.writingTitle>최신순</M.writingTitle>
          <M.myWritingAll>
            <M.myWritingArea>
              <M.backButton src={back} onClick={goToPrevPage}></M.backButton>
              {generateWriteAreas()}
              <M.nextButton src={next} onClick={goToNextPage}></M.nextButton>
            </M.myWritingArea>
          </M.myWritingAll>
        </writingLayout>
      </M.mainLayout>
    </>
  );
}
function WriteArea() {
  const navigate = useNavigate();

  return (
    <>
      <M.myWriting>
        <M.writingImg
          src={writingImg}
          onClick={() => navigate("/detail")}
        ></M.writingImg>
        <M.myWritingContainer>
          <M.myWritingTitle>글제목</M.myWritingTitle>
        </M.myWritingContainer>
        <M.myName>내이름</M.myName>
        <M.myWritingContainer>
          <M.likeNumber>좋아요 0개</M.likeNumber> <M.fewDays>1일 전</M.fewDays>
        </M.myWritingContainer>
      </M.myWriting>
    </>
  );
}
export default Main;
