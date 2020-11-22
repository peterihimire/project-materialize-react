import React, { Component } from "react";
import Banner from "./Banner";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <section className="home">
        <Banner />
      </section>
    );
  }
}
export default Header;
