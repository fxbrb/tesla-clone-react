import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Header = ({ openSidebar }) => {
  const links = [
    { name: "Model S", href: "#models" },
    { name: "Model 3", href: "#model3" },
    { name: "Model X", href: "#modelx" },
    { name: "Model Y", href: "#modely" },
    { name: "Powerwall", href: "#house" },
    { name: "Recharge" },
  ];

  return (
    <Head id="header">
      {/* Left part */}
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>

      {/* Middle part */}
      <Nav>
        <ul>
          {links.map((link, i) => {
            return (
              <li key={i}>
                <a href={link.href}>{link.name}</a>
              </li>
            );
          })}
        </ul>
      </Nav>

      {/* Right part */}
      <MenuBtn>
        <ul>
          <li>
            <a href="#">Assistance</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Compte</a>
          </li>
        </ul>
        <button onClick={() => openSidebar()}>Menu</button>
      </MenuBtn>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  z-index: 1;
  opacity: 0;

  ul {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    list-style: none;

    li {
      padding: 0.3rem 1.2rem;
      cursor: pointer;
      transition: all 0.5s ease-in-out;

      a {
        font-weight: 500;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
      }
    }
  }
`;

const Logo = styled.div`
  width: calc(100vw / 6);
  padding-left: 2rem;
  height: 100%;
  display: flex;
  align-items: center;

  img {
    width: 100px;
  }
`;

const MenuBtn = styled.div`
  /* width: calc(100vw / 3); */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.3rem 1rem;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    @media screen and (max-width: 1200px) {
      background: rgba(0, 0, 0, 0.05);
    }
  }

  ul {
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
`;

const Nav = styled.nav`
  /* width: calc(100vw / 3); */
  height: 100%;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
