import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const handleClick = () => onClose();

  return (
    <>
      <header className={isScrolled ? "scrolled" : null}>
        <div className="container">
          <a href="#home" className="logo">
            DigiTech
          </a>

          <ul className="navlist">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#services">services</a>
            </li>
            <li>
              <a href="#features">features</a>
            </li>
            <li>
              <a href="#blog">blog</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>

          <button className="headerBtn btn">
            <i className="fa-solid fa-chevron-right"></i> Get a Quote
          </button>

          <i className="fa-solid fa-bars crossbar" onClick={onOpen}></i>
        </div>
      </header>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <div className="drawer-header">
            <span className="drawer-logo">DigiTech</span>
            <span onClick={onClose} className="cross">
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>

          <div className="drawer-nav">
            <ul className="drawer-navlist">
              <li onClick={handleClick}>
                <a href="#home">Home</a>
              </li>
              <li onClick={handleClick}>
                <a href="#about">about</a>
              </li>
              <li onClick={handleClick}>
                <a href="#services">services</a>
              </li>
              <li onClick={handleClick}>
                <a href="#features">features</a>
              </li>
              <li onClick={handleClick}>
                <a href="#blog">blog</a>
              </li>
              <li onClick={handleClick}>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
