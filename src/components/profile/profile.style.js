import styled from "styled-components";

export const profileLayout = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  background: #fff;
`;

// 프로필 컨테이너
export const profileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
`;

//프로필 이미지
export const profileImg = styled.img`
  width: 18.15rem;
  height: 18.15rem;

  margin-left: 14.685rem;
  margin-top: 5rem;
  margin-bottom: 6.25rem;

  border-radius: 30rem;
`;

// 프로필 정보
export const profileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
`;

//프로필 이름
export const pofileName = styled.div`
  margin-left: 5rem;
`;

//학교 이름 제목
export const schoolNameTitle = styled.div`
  margin-left: 5rem;
`;

//학교 이름
export const schoolName = styled.div`
  margin-left: 5rem;
`;

//----------------------------------------------------------

export const writingLayout = styled.div`
`;

//글 타이틀
export const writingTitle = styled.div`
  margin-left: 15rem; //임시
  margin-bottom: 1.875rem;

  font-size: 1.5rem;
`;

//내 글 전체
export const myWritingAll = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//프로필에 있는 내 글 영역
export const myWritingArea = styled.div`
  display: flex;
  width: 85rem;

  justify-content: space-between;
`;

//이전 버튼
export const backButton = styled.img``;

//다음 버튼
export const nextButton = styled.img``;

//내 글 영역
export const myWriting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 18.75rem;
  height: 16.063rem;

  border-radius: 0.313rem;
  background: #fff;
  box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.1);
`;

//내 글 이미지
export const writingImg = styled.img`
  width: 18.75rem;
  height: 9.375rem;

  border-radius: 0.313rem;
`;

export const myWritingContainer = styled.div`
  display: flex;
  align-items: center;
`;

//내 글 제목
export const myWritingTitle = styled.div`
  display: inline-block;

  margin-left: 0.625rem;

  font-size: 1.125rem;
`;

//내 글 수정, 삭제(수직 타원)
export const verticalEllipsis = styled.img`
  display: inline-block;

  width: 0.938rem;
  height: 0.938rem;

  margin-left: auto;
  margin-right: 0.313rem;
`;

//내 이름
export const myName = styled.div`
  margin-left: 0.625rem;
  margin-top: 0.625rem;

  font-size: 0.875rem;
`;

//좋아요 수
export const likeNumber = styled.div`
  display: inline-block;

  margin-left: 0.625rem;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;

  font-size: 0.875rem;
`;

//올린날짜
export const fewDays = styled.div`
  display: inline-block;

  margin-left: 1.25rem;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;

  font-size: 0.875rem;
`;