import React from 'react'
import web from "../src/images/10.svg";
import Common from "./Common";
const Home = () => {
  return (
    <>
       <Common name = "Welcome to Home Page" imgsrc={web} visit="/service" btnname="Get Started"/>
    </>
  );
};
export default Home;
