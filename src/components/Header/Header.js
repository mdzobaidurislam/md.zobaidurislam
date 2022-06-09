import React from "react";
import "./Header.css";
import logo from "./../../logo/logo.png";
import logoStiky from "./../../logo/stiky_logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="custom-nav menuarea">
        <Container fluid>
          <Navbar.Brand href="#" className="logo pt-0">
            <img class="main_logo" src={logo} alt="logo" />
            <img class="stiky_logo" src={logoStiky} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
            <AiOutlineBars />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <ul class="navbar-nav text-center">
                <li class="nav-item active">
                  <Link to="/" class="nav-link active">
                    Home
                  </Link>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
