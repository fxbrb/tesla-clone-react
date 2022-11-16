import React from "react";
import styled from "styled-components";

const Title = ({ title, subtitle }) => {
  return (
    <TitleContent id="titles">
      <Titles>{title}</Titles>
      <TryText>
        <p>{subtitle}</p>
      </TryText>
    </TitleContent>
  );
};

export default Title;

const TitleContent = styled.div`
  width: 100%;
  text-align: center;
  overflow: hidden;
`;

const Titles = styled.h1`
  transform: translateY(150%);
  opacity: 0;
`;

const TryText = styled.span`
  height: 20px;
  display: flex;
  justify-content: center;

  p {
    font-size: 14px;
    border-bottom: 1px solid black;
    width: fit-content;
    letter-spacing: 0.03rem;
    opacity: 0;
    transform: translateY(100%);
    transition: border-bottom 0.3s ease-in-out;

    &:hover {
      border-bottom: 2px solid black;
    }
  }
`;
