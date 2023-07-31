import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const BackgroundImage = styled.div`
  background-image: url(/path/to/your/image.png);
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 200px;
`;

const OverlayText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  /* 더 높은 z-index 값을 주어 배경 이미지 위로 텍스트가 보이도록 설정 */
  z-index: 1;
`;

const StyledComponentWithBackgroundImage = () => {
  return (
    <Container>
      <BackgroundImage />
      <OverlayText>
        This is the text on top of the background image.
      </OverlayText>
    </Container>
  );
};

export default StyledComponentWithBackgroundImage;
