import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import Header from "./components/Header";
import Banner from "./components/Banner";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
      </div>
    );
  }
}

export default App;
