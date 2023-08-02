import styled from "styled-components";

export const mainLayout = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  background: #fff;

`;

export const banner = styled.img`
  width: 100%
`;

export const title = styled.div`
  font-weight: 1000;
  font-size: 25px;
  margin-top: 1vw;
  margin-bottom: 2vw;
  margin-left: 11vw;
`;

export const writes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const writeArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 18vw;
  height: 28vh;
  justify-content: space-between;
`;

export const writeImg = styled.img`
  width: 100%;
  border-radius: 5%;
  object-fit: cover;
`;

export const writeTitle = styled.div`
  margin-left: 1vw;
  font-weight: 1000;
`;

export const writer = styled.div`
  margin-left: 1vw;
`;

export const detail = styled.div`
  margin-left: 1vw;
  display: flex;
`
export const like = styled.div`
  margin-right: 1vw;
`

export const WriteAreas = styled.div`
  display: flex;
  width: 80vw;

  justify-content: space-between;
`