import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import * as P from "./profile.style";
import back from "../../asset/img/backButton.svg";
import next from "../../asset/img/nextButton.svg";
import writingImg from "../../asset/img/writingImg.svg";
import verticalEllipsis from "../../asset/img/verticalEllipsis.svg";
import profile1 from "../../asset/img/profile1.svg";
import profileChange from "../../asset/img/profileChange.svg";

function Profile() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

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

  //인풋 파일 요소의 값이 변경되었을 때 호출
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // 선택된 파일
    if (file) {
      // 파일이 선택됐다면
      const reader = new FileReader();
      reader.onloadend = () => {
        // 파일 읽기 완료
        setSelectedFile(reader.result); // 읽은 파일을 selectedFile 상태에 저장
      };
      reader.readAsDataURL(file); // 파일을 Data URL 형태로 읽어옴
    }
  };

  return (
    <P.profileLayout>
      <Header></Header>
      <P.profileContainer>
        <P.profileImg
          src={selectedFile ? selectedFile : profile1}
          alt="프로필 변경"
          onMouseOver={() => setModalOpen(true)}
        />
        {isModalOpen && (
          <P.profileChangeContainer>
            <P.profileChangeImg src={profileChange}></P.profileChangeImg>
            <P.label onMouseOut={() => setModalOpen(false)}>
              <P.profileChangeInput type="file" onChange={handleFileChange} />
            </P.label>
          </P.profileChangeContainer>
        )}
        <P.profileInfo>
          <P.pofileName>내이름</P.pofileName>
          <P.schoolNameTitle>학교</P.schoolNameTitle>
          <P.schoolName>대구소프트웨어마이스터고</P.schoolName>
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
  const navigate = useNavigate();

  return (
    <>
      <P.myWriting>
        <P.writingImg
          src={writingImg}
          onClick={() => navigate("/detail")}
        ></P.writingImg>
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
