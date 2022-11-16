import styled from "styled-components";
import "./App.scss";
import modely from "./assets/modely.jpeg";
import model3 from "./assets/model3.jpeg";
import models from "./assets/models.jpeg";
import modelx from "./assets/modelx.jpeg";
import house from "./assets/house.jpeg";
import accessoires from "./assets/accessoires.jpeg";
import modelyMobile from "./assets/modelyMobile.jpeg";
import model3Mobile from "./assets/model3Mobile.jpeg";
import modelsMobile from "./assets/modelsMobile.jpeg";
import modelxMobile from "./assets/modelxMobile.jpeg";
import houseMobile from "./assets/houseMobile.jpeg";
import accessoiresMobile from "./assets/accessoiresMobile.jpeg";
import { useState } from "react";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import useScrollPosition from "./hooks/scrollPosition";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiChevronDown } from "react-icons/fi";
import Footer from "./components/Footer";
import useWindowSize from "./hooks/windowSize";

function App() {
  const [open, setOpen] = useState(false);

  const sections = [
    {
      id: "modely",
      title: "Model Y",
      subtitle: "Réservez votre essai",
      img: `url(${modely})`,
      imgMobile: `url(${modelyMobile})`,
      bottomText: "En savoir plus sur Tesla for Business",
      icon: <FiChevronDown size={28} opacity={0.9} />,
      button1: "Configuration personnalisée",
      button2: "Véhicules disponibles",
    },
    {
      id: "model3",
      title: "Model 3",
      subtitle: "Réservez votre essai",
      img: `url(${model3})`,
      imgMobile: `url(${model3Mobile})`,
      bottomText: "A reçu la note maximale de 5 étoiles par Euro NCAP",
      button1: "Configuration personnalisée",
      button2: "Découvrir nos véhicules disponibles",
    },
    {
      id: "models",
      title: "Model S",
      img: `url(${models})`,
      imgMobile: `url(${modelsMobile})`,
      button1: "Configuration personnalisée",
      button2: "En savoir plus",
    },
    {
      id: "modelx",
      title: "Model X",
      img: `url(${modelx})`,
      imgMobile: `url(${modelxMobile})`,
      button1: "Configuration personnalisée",
      button2: "En savoir plus",
    },
    {
      id: "house",
      title: "Systèmes d'énergie solaire et Powerwalls",
      subtitle: "De l'énergie pour tous vos besoins",
      img: `url(${house})`,
      imgMobile: `url(${houseMobile})`,
      button1: "En savoir plus",
    },
    {
      id: "accessoires",
      title: "Accessoires",
      img: `url(${accessoires})`,
      imgMobile: `url(${accessoiresMobile})`,
      button1: "Commander maintenant",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: ".scroll-snap",
    });

    gsap
      .timeline()
      .to("#header", {
        duration: 1.5,
        opacity: 1,
        ease: "expo.inOut",
      })
      .to("#titles h1", {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "expo.inOut",
      })
      .to("#titles p", {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "expo.inOut",
      })
      .to("#button--container button", {
        duration: 1.5,
        x: 0,
        ease: "expo.inOut",
      })
      .to("#scroll-down", {
        duration: 0.5,
        y: 0,
        ease: "expo.inOut",
      });
  }, []);

  // console.log(scrollPosition);

  const openSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <MainSection className="scroll-snap">
        <Header openSidebar={openSidebar} open={open} />
        <Sidebar openSidebar={openSidebar} open={open} />
        {open && (
          <BackdropFilter onClick={() => openSidebar()}></BackdropFilter>
        )}

        {sections.map((section, k) => {
          return (
            <Section
              key={k}
              openSidebar={openSidebar}
              open={open}
              id={section.id}
              title={section.title}
              subtitle={section.subtitle}
              img={section.img}
              imgMobile={section.imgMobile}
              bottom={section.bottomText}
              icon={section.icon}
              button1={section.button1}
              button2={section.button2}
            />
          );
        })}
      </MainSection>
      <Footer />
    </>
  );
}

export default App;

const MainSection = styled.section`
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const BackdropFilter = styled.div`
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  left: 50%;
  position: fixed;
  top: 50%;
  z-index: 99;
  pointer-events: inherit;
  transition: all 0.5s ease-in-out;
  backdrop-filter: blur(5px);
  background-color: rgb(0, 0, 0, 0.3);
`;
