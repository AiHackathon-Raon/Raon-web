import styled from "styled-components";

export const detailLayout = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  background: #fff;
`;

export const detailPhotoBox = styled.div`
  // 가로 길이 106.7rem, 1707px
  width: 76.7rem;
  height: 14.375rem;

  margin-left: 15rem;
  margin-right: 15rem;
  margin-top: 3.75rem;
  margin-bottom: 2.5rem;

  background-color: #f4f4f4;
`;

export const onlySameSchoolBox = styled.div`
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
