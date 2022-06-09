import React from "react";
import "./About.css";
import ab from "./../../logo/ab.jpg";
import { FiFacebook } from "react-icons/fi";
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
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <p class="mt-2">
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p class="mt-2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <div className="social_icon">
                {" "}
                <a href="/">
                  <FiFacebook />
                </a>
                <a href="/">
                  <FiFacebook />
                </a>
                <a href="/">
                  <FiFacebook />
                </a>
                <a href="/">
                  <FiFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
