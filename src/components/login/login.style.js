import styled from "styled-components";

export const All = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Img = styled.img`
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
`;

export const Back = styled.div`
  z-index: 1;
  width: 600px;
  height: 700px;
  flex-shrink: 0;
  border-radius: 50px;
  backdrop-filter: blur(5px);
  background: rgba(34, 61, 174, 0.17);
  transform: translate(560px, 149px);
`;

export const Logo = styled.img`
  z-index: 2;
  transform: translate(736px, -474px);
`;

export const Id = styled.div`
  z-index: 3;
  color: #1e3abb;
  text-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  font-family: "Pretendard", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transform: translate(650px, -423px);
`;

export const Raund = styled.input`
  outline: none;
  padding-inline-start: 20px;
  padding-inline-end: 20px;
  font-size: 20px;
  width: 420px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 2px 3px 10px 0px rgba(255, 255, 255, 0.1) inset,
    0px 10px 30px 0px rgba(0, 0, 0, 0.2),
    0px -3px 10px 0px rgba(255, 255, 255, 0.1) inset;
  transform: translate(640px, -410px);
  border: none;
`;

export const Pw = styled.div`
  z-index: 3;
  color: #1e3abb;
  text-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  font-family: "Pretendard", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transform: translate(650px, -355px);
`;

export const Raund_ = styled.input`
  outline: none;
  padding-inline-start: 20px;
  padding-inline-end: 20px;
  width: 420px;
  font-size: 20px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 2px 3px 10px 0px rgba(255, 255, 255, 0.1) inset,
    0px 10px 30px 0px rgba(0, 0, 0, 0.2),
    0px -3px 10px 0px rgba(255, 255, 255, 0.1) inset;
  transform: translate(640px, -342px);
  border: none;
`;

export const Login_ = styled.button`
  z-index: 4;
  width: 455px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 50px;
  background: linear-gradient(143deg, #0f2690 0%, rgba(31, 67, 233, 0.64) 100%);
  box-shadow: 2px 3px 10px 0px rgba(255, 255, 255, 0.1) inset,
    0px 10px 30px 0px rgba(0, 0, 0, 0.2);
  transform: translate(185px, -190px);
  border: none;
  color: #fff;
  text-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  font-family: "Pretendard", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const No = styled.div`
  color: #322f2f;
  text-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.2);
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transform: translate(670px, -175px);
`;

export const SignUp = styled.div`
  z-index: 6;
  color: #1e3abb;
  text-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.2);
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  transform: translate(788px, -192px);
  cursor: pointer;
`;
