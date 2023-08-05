import styled from "styled-components";

export const header = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #E5E5E5;
    align-items: center;
    justify-content: space-between;
`

export const logo = styled.img`
    margin: 1vw;
    margin-left: 2vw;
    width: 6vw;
    height: 4vw;
    cursor: pointer;
`

export const searchfiled = styled.div`
  position: relative;
`

export const search = styled.input`
  border: none;
  outline: none;
  font-size: 15px;
  width: 40vw;
  height: 3vw;
  padding-left: 1vw; 
  border-radius: 100px;
  box-shadow: 10px 10px 10px #00000025;
  padding-inline-start: 30px;
  &::-webkit-search-cancel-button {
    display: none;
  }
  &::-webkit-search-decoration {
    display: none;
  }
`
export const searchButton = styled.img`
  width: 1vw;
  height: 1vw;
  cursor: pointer;
  position: absolute;
  top: 2vh;
  right: 1vw;
`;

export const profile = styled.div`
  display: flex;
  font-weight: 1000;
  align-items: center;
  width: 8vw;
  justify-content: space-evenly;
  margin-right: 3vw;
`

export const profileImg = styled.img`
  width: 3vw;
  height: 3vw; 
  border-radius: 70%;
  object-fit: cover;
  cursor: pointer;
`