import styled from "styled-components";

export const mainLayout = styled.div`

  width: 100%;
  height: 100%;

  background: #fff;

`;

export const writing = styled.div`
    display:flex;
    align-items: center;
    width: 100vw;
    flex-direction: column;
`

export const fileInput = styled.input`
    display: none;
`;

export const fileInputLabel = styled.div`
    margin-top: 3vw;
    background-color: #E5E5E5;
    width: 80%;
    cursor: pointer;
`;

export const uploadImg = styled.img`
    margin-top: 12vw;
    margin-left: 0.2vw;
`

export const ImagePreview = styled.img`
  max-width: 200px;
  max-height: 200px;
  margin-top: 10px;
`;

export const writeTitle = styled.input`
    font-size: 20px;
    border: none;
    border-bottom: 1px solid black;
    width: 80%;
    height: 5vh;
    margin-top: 1vw;
  outline: none;
`

export const writeDetail = styled.textarea`
    border: none;
    resize: none;
    width: 80%;
    margin-top: 1vw;
  outline: none;
`

export const uploadButton = styled.button`
    border: none;
    width: 10vw;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin-top: 2vw;
    margin-left: 70vw;
`

export const buttonImg = styled.img`
    width: 12vw;
`