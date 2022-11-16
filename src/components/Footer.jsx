import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import useScrollPosition from "../hooks/scrollPosition";

const Footer = () => {
  const scrollPosition = useScrollPosition();

  console.log(scrollPosition);
  const footerLinks = [
    "Tesla © 2022",
    "Mentions légales",
    "Contact",
    "Carrières",
    "Actualités",
    "Localisations",
  ];

  return (
    <FooterContent className={scrollPosition >= 3900 ? "opacity" : ""}>
      <FooterNav>
        <FooterLeft>
          <p>Pensez à covoiturer #SeDéplacerMoinsPolluer</p>
        </FooterLeft>
        <FooterRight>
          <ul>
            {footerLinks.map((link, k) => {
              return (
                <li key={k}>
                  <a href="#">{link}</a>
                </li>
              );
            })}
          </ul>
        </FooterRight>
      </FooterNav>
    </FooterContent>
  );
};

export default Footer;

const FooterContent = styled.footer`
  width: 100%;
  height: fit-content;
  position: fixed;
  bottom: 0;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  pointer-events: none;
  padding: 1rem;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 1rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const FooterLeft = styled.div`
  flex-grow: 1;
  flex-basis: 0;

  p {
    font-size: 12px;
  }
`;

const FooterRight = styled.div`
  flex-grow: 1;

  ul {
    display: flex;
    list-style: none;

    li {
      margin: 0 10px;
      a {
        font-size: 12px;
      }
    }
  }
`;
