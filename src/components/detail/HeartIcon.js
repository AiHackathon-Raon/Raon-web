import React from "react";
import styled from "styled-components";
import beforeHeart from "../../asset/img/beforeHeart.svg";
import afterHeart from "../../asset/img/afterHeart.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const HeartNumber = styled.span`
  display: inline-block;

  margin-left: 86.645rem;
  margin-top: 0.625rem;

`;

const HeartImg = styled.img`
  display: inline-block;

  width: 1.25rem;
  height: 1.25rem;

  margin-left: 0.313rem;
  margin-top: 0.625rem;

  cursor: pointer;
`;

const HeartButton = ({ like, onClick, likeCount }) => {
  return (
    <Container>
      <HeartNumber>{likeCount}개</HeartNumber>
      <HeartImg src={like ? afterHeart : beforeHeart} onClick={onClick} />
    </Container>
  );
};

export default HeartButton;
