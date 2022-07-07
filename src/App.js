import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar";
import {Redirect, Route, Switch} from "react-router-dom"
import "./index.css"
import Footer from "./Footer";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "bootstrap"


const App=()=> {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/services" component={Services}/>
      <Redirect to="/"/>
      <Home/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
