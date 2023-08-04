import styled from "styled-components";

export const detailLayout = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  background: #fff;
`;

export const detailPhotoBox = styled.img`
  // 가로 길이 106.7rem, 1707px
  width: 76.7rem;
  height: 14.375rem;

  margin-left: 15rem;
  margin-top: 3.75rem;
  margin-bottom: 2.5rem;

  background-color: #f4f4f4;
`;

//게시물 영역

export const postingArea = styled.div``;

//같은 학교만 보기 or 전체공개
export const areaViewOptions = styled.div`
  width: 7.875rem;
  height: 1.875rem;

  border-radius: 0.625rem;
  border: 0.063rem solid #888;

  margin-left: 16.438rem;

  background-color: #f4f4f4;

  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//게시물 제목

export const postTitle = styled.div`
  display: inline-block;

  margin-left: 16.438rem;
  margin-top: 1.25rem;

  font-size: 1.875rem;
`;

//게시물 작성자
export const postAuthor = styled.div`
  display: inline-block;

  margin-left: 0.625rem;

  font-size: 0.875rem;
`;

//작성자 인증배지
export const certificationBadge = styled.img`
  width: 0.75rem;
  height: 0.75rem;

  margin-left: 0.188rem;
`;

//영역 구분선
export const areaDividingLine = styled.div`
  width: 76.7rem;
  height: 0.063rem;

  margin-left: 15rem;
  margin-top: 0.625rem;
  margin-bottom: 0.938rem;

  background-color: #bbbbbb;
`;

//게시물 내용
export const postContent = styled.div`
  width: 73.563rem;
  height: 12.125rem;

  margin-left: 16.438rem;

  word-break: break-all;
  font-size: 1.25rem;
`;

//댓글 영역
export const commentsArea = styled.div``;

//댓글 타이틀
export const commentTitles = styled.div`
  display: inline-block;

  margin-left: 16.438rem;

  font-size: 1.25rem;
`;

//댓글 개수
export const commentNumber = styled.div`
  display: inline-block;

  margin-left: 0.313rem;

  font-size: 0.75rem;
`;

//--------------------------------------------------------
//댓글함수

//댓글영역
export const commentSection = styled.div`
  display: flex;
  align-items: center;
  width: 76.7rem;
  height: 4rem;

  margin-left: 15rem;
  margin-top: 0.625rem;

  background: #f6f6f6;
`;

//댓글 작성자 프로필
export const commentAuthorProfile = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  margin-left: 1.25rem;

  border-radius: 10rem;
`;

//작성자, 내용 묶기
export const commentInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 0.625rem;
`;

export const commentAuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

//댓글 작성자
export const commentAuthor = styled.div`
  display: inline-block;
  font-size: 0.875rem;
`;

//댓글 작성자 인증배지
export const commentAuthorCertificationBadge = styled.img`
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;

  margin-left: 0.188rem;
`;

//댓글 내용
export const comment = styled.div`
  width: 73.563rem;
  height: 1.125rem;

  font-size: 0.938rem;
`;

//--------------------------------------------------------
//댓글쓰기

//댓글쓰기영역
export const CommentWritingArea = styled.div`
  display: flex;
  align-items: center;
  width: 76.7rem;
  height: 4rem;

  margin-left: 15rem;
  margin-top: 0.625rem;

  background: #f6f6f6;
`;

//내프로필
export const myProfile = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  margin-left: 1.25rem;

  border-radius: 10rem;
`;

//내이름, 내용 묶기
export const myCommentInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 0.625rem;
`;

//내 이름
export const myName = styled.div`
  display: inline-block;
  font-size: 0.875rem;
`;

//내 댓글 내용
export const myComment = styled.input`
  width: 60.563rem;
  height: 1.125rem;

  background: none;
  outline: none;
  border: none;
  padding-inline-start: 0;

  font-size: 0.938rem;
  color: #000;
`;

//댓글 업로드 버튼
export const commentUploadButton = styled.button`
  background: none;
  outline: none;
  border: none;

  margin-left: 7.952rem;

  cursor: pointer;
`;

//댓글 업로드 이미지
export const commentUploadImg = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;
