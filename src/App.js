import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeAbout from "./components/HomeAbout";
import Banner from "./components/Banner";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <HomeAbout />
      </div>
    );
  }
}

export default App;
