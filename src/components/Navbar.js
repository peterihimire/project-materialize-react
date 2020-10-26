import React, { Component } from "react";
import "./Navbar.css";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/menu-icon.svg";
import M from "materialize-css/dist/js/materialize.min.js";

class Navbar extends Component {
  componentDidMount() {
    // sidenav
    const sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {});
  }

  render() {
    return (
      <>
        <div className="navbar">
          <nav className="trans-nav" role="navigation">
            <div className=" container nav-wrapper">
              <div className="logo-container ">
                <a href="/" className="brand-logo left">
                  <img src={logo} alt="paymonthly" className="logo" />
                </a>
              </div>

              <a
                href="/"
                className="sidenav-trigger right"
                data-target="mobile-nav"
              >
                {/* <i class="material-icons black-text">menu</i> */}
                <img src={menuIcon} alt="menu" className="menu-icon-img" />
              </a>

              <ul className="hide-on-med-and-down nav-center nav-links">
                <li className="nav-item">
                  <a className="black-text" href="about.html">
                    home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/">about</a>
                </li>
                <li className="nav-item">
                  <a href="/">faq</a>
                </li>
              </ul>

              <ul className="hide-on-med-and-down right nav-links">
                <li className="nav-item nav-login-group">
                  <a href="/">log in</a>
                  <span>
                    <a href="/" className="btn nav-btn white-text">
                      sign up
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <ul className="sidenav" id="mobile-nav">
          <div className="sidenav-logo">
            <a href="/">
              <img src={logo} alt="vasiti-logo" />
            </a>
          </div>

          <li className="nav-item">
            <a className="" href="/">
              home
            </a>
          </li>
          <li className="nav-item">
            <a href="/">about</a>
          </li>
          <li className="nav-item">
            <a href="/">faq</a>
          </li>
          <li className="nav-item login-style">
            <a href="/" className="">
              log in
            </a>
          </li>
          <li className="nav-item signup-style ">
            <a href="/" className="  ">
              sign up
            </a>
          </li>

          <div className="sidenav-footer ">
            <div className="sidenav-footer-container center">
              {/* <div class="sidenav-social-icons">
                <a href="/" target="_blank">
                  {" "}
                  <img src={logo} alt="ing" />
                </a>
                <a href="/" target="_blank">
                  {" "}
                  <img src={logo} alt="ing" />
                </a>
                <a href="/" target="_blank">
                  {" "}
                  <img src={logo} alt="ing" />
                </a>
                <a href="/" target="_blank">
                  {" "}
                  <img src={logo} alt="ing" />
                </a>
              </div> */}
              <div className="black-txt bold-txt">
                <p>©COPYRIGHT PAYMONTHLYCARS.COM 2020</p>
              </div>
            </div>
          </div>
        </ul>
      </>
    );
  }
}
export default Navbar;
