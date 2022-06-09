import React from "react";
import "./About.css";
import ab from "./../../logo/ab.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section class="section" id="about">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about-img mt-3">
              <img src={ab} class="img-fluid custom-thumbnail" alt="logo" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
              <div class="hello">
                <h3 class="orangeText">I'm a web developer.</h3>
              </div>
              <div class="name">
                <h3>I Can Developed Anything You Want</h3>
              </div>
              <p class="mt-2">
                I have confidence in my skill. I can work with you depending on
                my skill. Besides, I was learning PHP for 1 year and others
                languages. Some work was done for the practice.
              </p>

              <div className="mt-4">
                <Link to="/about" className="custom_btn">
                  Hire me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
