import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Buttons from "./Buttons";
import ScrollDown from "./ScrollDown";

const Section = ({
  id,
  title,
  subtitle,
  img,
  imgMobile,
  bottom,
  icon,
  button1,
  button2,
}) => {
  return (
    <Div id={id} img={img} imgMobile={imgMobile}>
      <SectionContent>
        <Title title={title} subtitle={subtitle} />
        <Buttons button1={button1} button2={button2} />
        <ScrollDown bottom={bottom} icon={icon} />
      </SectionContent>
    </Div>
  );
};

export default Section;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  overflow: hidden;
  background-image: ${(props) => props.img};
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 600px) {
    background-image: ${(props) => props.imgMobile};
  }
`;

const SectionContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
`;
