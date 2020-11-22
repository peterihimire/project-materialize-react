import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeAbout from "./components/HomeAbout";
import Banner from "./components/Banner";
import BuyCar from "./components/BuyCar";
import SeeCar from "./components/SeeCar";
// import LearningUseEffect from "./components/LearningUseEffect";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <HomeAbout />
        <BuyCar />
        <SeeCar />
        {/* <LearningUseEffect /> */}
      </div>
    );
  }
}

export default App;
