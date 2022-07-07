import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/web.svg"
import Common from "./Common";

const Home = () => {
    return (
        <>
          <Common
          name='Grow your buisness with' 
          imgsrc={web} 
          visit="/about" 
          btnName="Get started"
          />
        </>
    );
}

export default Home;
