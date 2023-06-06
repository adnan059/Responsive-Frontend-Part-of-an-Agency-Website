import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer id="contact">
        <div className="container">
          <div className="footerBox footerBox1">
            <h2>DigiTech</h2>
            <p>
              Maecenas pellentesque placerat quam, in finibus nisl tincidunt
              sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget
              felis.
            </p>
            <div className="socialIcons">
              <span>
                <i className="fa-brands fa-facebook"></i>
              </span>
              <span>
                <i className="fa-brands fa-instagram"></i>
              </span>
              <span>
                <i className="fa-brands fa-twitter"></i>
              </span>
            </div>
          </div>

          <div className="footerBox footerBox2">
            <h2>Our Links</h2>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#features">Features</a>
            <a href="#blog">Blog</a>
          </div>

          <div className="footerBox footerBox3">
            <h2>Our Services</h2>
            <a href="#services">Research & Strategy</a>
            <a href="#services">Web Design</a>
            <a href="#services">Web Solution</a>
            <a href="#services">Digital Marketing</a>
            <a href="#services">App Design</a>
          </div>

          <div className="footerBox footerBox4">
            <h2>Other Links</h2>
            <a href="#random">FAQ</a>
            <a href="#random">Portfolio</a>
            <a href="#random">Privacy Policy</a>
            <a href="#random">T&C</a>
            <a href="#random">Support</a>
          </div>

          <div className="footerBox footerBox5">
            <h2>Contact Us</h2>
            <span>
              <i className="fa-solid fa-phone"></i> +9861XXX256
            </span>
            <span>
              <i className="fa-solid fa-envelope"></i> random@sth.com
            </span>
            <span>
              <i className="fa-solid fa-location-dot"></i> ZZ city, VV
            </span>
          </div>
        </div>
        <p className="credit">
          Made by
          <a
            href="https://www.facebook.com/profile.php?id=100091858671661"
            target="_blank"
            rel="noreferrer"
          >
            Md. Adnan Faruk
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
