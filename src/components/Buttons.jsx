import React from "react";
import styled from "styled-components";

const Buttons = ({ button1, button2 }) => {
  return (
    <ButtonsContainer>
      <div id="button--container">
        {button1 && button2 ? (
          <>
            <button>{button1}</button>
            <button>{button2}</button>
          </>
        ) : (
          <button>{button1}</button>
        )}
      </div>
    </ButtonsContainer>
  );
};

export default Buttons;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  max-width: 40rem;
  margin: 0 auto;
  flex: 6;

  div {
    width: 100%;
    display: flex;
    gap: 25px;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media screen and (max-width: 600px) {
      flex-direction: column;
      padding: 0 1rem;
    }
  }

  button {
    width: 270px;
    color: white;
    border: none;
    background-color: rgba(23, 26, 32, 0.8);
    padding: 0.7rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transform: translateX(-170%);

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }

  button {
    &:nth-child(2) {
      background-color: rgba(244, 244, 244, 0.65);
      color: #171a20;
      backdrop-filter: blur(10px);
      transform: translateX(120%);
    }
  }
`;
