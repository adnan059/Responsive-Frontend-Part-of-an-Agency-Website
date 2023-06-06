import React from "react";
import "./AgencyWS.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Specialization from "./components/Specialization/Specialization";

const AgencyWS = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Specialization />
      <Features />
      <Blog />
      <Footer />
    </>
  );
};

export default AgencyWS;
