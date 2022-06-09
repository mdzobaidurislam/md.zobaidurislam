import React from "react";
import "./Header.css";
import logo from "./../../logo/logo.png";
import logoStiky from "./../../logo/stiky_logo.png";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg  custom-nav menuarea">
      <div class="container">
        <a class="navbar-brand pt-0 logo" href="#">
          <img class="main_logo" src={logo} alt="logo" />
          <img class="stiky_logo" src={logoStiky} alt="" />
        </a>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>

        <div class="navbar-collapse collapse" id="navbarCollapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#client">
                Client
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#work">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
