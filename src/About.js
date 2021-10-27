import React from 'react'
import web from "../src/images/9.svg";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common name = "Welcome to About Page" imgsrc={web} visit="/contact" btnname="Contact Now"/>
    </>
  );
};
export default About;
