import React from "react";
import jami from "./../../logo/jami.png";
import "./Hero.css";
import { Link, NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero_section" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div class="hero_area">
              <div>
                <div class="hello">
                  <h3 class="orangeText">Hello, I'm</h3>
                </div>
                <div class="name">
                  <h3>Md.Zobaidur Islam</h3>
                </div>
                <div class="job">
                  <p>
                    A <span class="greenText">Creative Developer</span> From{" "}
                    <span class="purpleText">Dhaka,Bangladesh</span>
                  </p>
                </div>
                <div class="hero_des">
                  <p>
                    I'm a full-stack web developer and my passion is coding.{" "}
                    <br /> I want to improve my coding skills by joining a
                    company where <br /> I can learn new skills and
                    technologies. I can work well both <br /> independently and
                    as a part of a team.
                  </p>
                </div>
                <div className="hero_btn d-flex">
                  <div>
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/18DYM3N4eXX3c6-ZTIdCzT0v5xb_kNK6w/view?usp=sharing"
                      className="custom_btn"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="profile_thum">
                <img src={jami} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-animate">
        <Link to="#" class="scroll">
          <i class="text-white"></i>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
