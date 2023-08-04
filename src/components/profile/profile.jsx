import React, { useState } from "react";
import * as P from "./profile.style";
import back from "../../asset/img/backButton.svg";
import next from "../../asset/img/nextButton.svg";
import writingImg from "../../asset/img/writingImg.svg";
import verticalEllipsis from "../../asset/img/verticalEllipsis.svg";
import profile1 from "../../asset/img/profile1.svg";

function Profile() {
  const totalWriteAreas = 10; // 전체 WriteArea 개수
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
    <P.profileLayout>
      <P.profileContainer>
        <P.profileImg src={profile1} />
        <P.profileInfo>
          <P.pofileName>내이름</P.pofileName>
          <P.schoolNameTitle>학교 이름</P.schoolNameTitle>
          <P.schoolName>대구소프트웨어마이스터고등학교</P.schoolName>
        </P.profileInfo>
      </P.profileContainer>
      <writingLayout>
        <P.writingTitle>내 글</P.writingTitle>
        <P.myWritingAll>
          <P.myWritingArea>
            <P.backButton src={back} onClick={goToPrevPage}></P.backButton>
            {generateWriteAreas()}
            <P.nextButton src={next} onClick={goToNextPage}></P.nextButton>
          </P.myWritingArea>
        </P.myWritingAll>
      </writingLayout>
    </P.profileLayout>
  );
}

function WriteArea() {
  return (
    <>
      <P.myWriting>
        <P.writingImg src={writingImg}></P.writingImg>
        <P.myWritingContainer>
          <P.myWritingTitle>글제목</P.myWritingTitle>
          <P.verticalEllipsis src={verticalEllipsis}></P.verticalEllipsis>
        </P.myWritingContainer>
        <P.myName>내이름</P.myName>
        <P.myWritingContainer>
          <P.likeNumber>좋아요 0개</P.likeNumber> <P.fewDays>1일 전</P.fewDays>
        </P.myWritingContainer>
      </P.myWriting>
    </>
  );
}

export default Profile;
