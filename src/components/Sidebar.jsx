import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
import useWindowSize from "../hooks/windowSize";

const Sidebar = ({ open, openSidebar }) => {
  const [mobile, setMobile] = useState(false);

  const sidebarlinks = [
    { name: "Model S", mobile: mobile },
    { name: "Model 3", mobile: mobile },
    { name: "Model X", mobile: mobile },
    { name: "Model Y", mobile: mobile },
    { name: "Véhicules D'occasion", mobile: true },
    { name: "Véhicules disponibles", mobile: true },
    { name: "Reprise", mobile: true },
    { name: "Essais", mobile: true },
    { name: "Véhicules de société", mobile: true },
    { name: "Powerwall", mobile: true },
    { name: "Énergie", mobile: true },
    { name: "Électricité pour professionnels", mobile: true },
    { name: "Industries", mobile: true },
    { name: "Recharge", mobile: true },
    { name: "Nous trouver", mobile: true },
    { name: "Assistance", mobile: true },
    { name: "Relations investisseurs", mobile: true },
    { name: "Shop", mobile: true },
    { name: "Compte", mobile: true },
    { name: "Plus", mobile: true },
  ];

  const size = useWindowSize();

  const hiddeLink = () => {
    size.width <= 1200 ? setMobile(true) : setMobile(false);
  };

  useEffect(() => {
    hiddeLink();
  }, [hiddeLink]);

  return (
    <SideMenu className={open ? "sidebar__open" : ""}>
      <SideTop>
        <div onClick={() => openSidebar()}>
          <AiOutlineClose size={20} />
        </div>
      </SideTop>
      <SidebarContent>
        {sidebarlinks.map((link, k) => {
          return <li key={k}>{link.mobile && <a href="#">{link.name}</a>}</li>;
        })}
      </SidebarContent>
    </SideMenu>
  );
};

export default Sidebar;

const SideMenu = styled.div`
  position: fixed;
  height: 100vh;
  right: 0;
  background-color: #fff;
  transform: translateX(100%);
  transition: all 0.5s ease;
  opacity: 0;
  z-index: 999;
`;

const SideTop = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 2rem 0;
  justify-content: flex-end;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;

const SidebarContent = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 1.5rem;
  height: 100%;
  padding: 1.7rem 2rem 8rem 3rem;
  overflow-y: scroll;

  li {
    a {
      margin-bottom: 10px;
      padding: 0.3rem 0.5rem;
      border-radius: 4px;
      display: flex;
      flex-grow: 1;
      text-decoration: none;
      font-size: 14px;
      transition: all 0.4s ease-in-out;

      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }
    }
  }
`;
