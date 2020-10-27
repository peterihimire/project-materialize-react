import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeAbout from "./components/HomeAbout";
import Banner from "./components/Banner";
import BuyCar from "./components/BuyCar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <HomeAbout />
        <BuyCar />
      </div>
    );
  }
}

export default App;
