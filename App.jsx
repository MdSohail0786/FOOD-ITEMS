import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
//import {Browser as Router,Route,Switch }from `react-router-dom`;
import Navbar from "./Container/Header/Navbar/Navbar";
import Home from "./Container/Header/Home/Home";
import Menu from "./Container/Header/Menu/Menu";
import About from "./Container/Header/About/About";
import Contect from "./Container/Header/Contect/Contect";
import Footer from "./Container/Header/Footer/Footer";
//import Slider from "./Container/Header/Add/Slider";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      {/* <Slider></Slider> */}
      <Menu></Menu>
      <Contect></Contect>
      <Footer></Footer>

      {/* <Router>

        <Switch>
         < Route path="/" exact component={Home} />
         < Route path="/about" exact component={About} />
         < Route path="/menu" exact component={Menu} />
         < Route path="/contect" exact component={Contect} />
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
