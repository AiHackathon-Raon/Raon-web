import styled from "styled-components";

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
  transform: translate(90%, 17%);
`;

export const Logo = styled.div`
  z-index: 2;
  color: #223dae;
  text-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  font-family: "Rubik Glitch", sans-serif;
  font-size: 90px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transform: translate(44%, -510%);
`;
