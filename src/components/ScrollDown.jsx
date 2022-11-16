import React from "react";
import styled from "styled-components";

const ScrollDown = ({ bottom, icon }) => {
  return (
    <BottomSection>
      {bottom && (
        <div id="scroll-down">
          <span>
            <p>{bottom}</p>
          </span>
          <a href="#model3">{icon}</a>
        </div>
      )}
    </BottomSection>
  );
};

export default ScrollDown;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
  flex: 1;
  overflow: hidden;

  #scroll-down {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
    transform: translateY(-100%);

    span {
      height: 17px;

      p {
        font-size: 14px;
        letter-spacing: 0.03rem;
        border-bottom: 1px solid black;
        transition: border-bottom 0.3s ease-in-out;

        &:hover {
          border-bottom: 2px solid black;
        }
      }
    }

    a {
      animation: arrowBounce 2s infinite;
    }
  }
`;
