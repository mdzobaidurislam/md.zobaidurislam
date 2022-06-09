import React from "react";
import "./About.css";
import ab from "./../../logo/ab.jpg";
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
              <p class="mt-2">
                I have confidence in my skill. I can work with you depending on
                my skill. Besides, I was learning PHP for 1 year. Some work was
                done for the practice.
              </p>
              <p class="mt-2">
                <strong>Front-End Technologies:</strong> React, React Hook,
                React Bootstrap, HTML5, CSS3, BootStrap, JavaScript,Tailwind CSS{" "}
                <br />
                <br />
                <strong>Back-End Technologies:</strong> NodeJS, ExpressJS,
                MongoDB, Mongoose, API, Firebase, PHP, MySQL, Laravel
                <br />
                <br />
                <strong>Familiar:</strong> Material UI, Daisy UI
                <br />
                <br />
                <strong>Tools:</strong> Vs Code, Notepad++, Git, Github, Xampp,
                Chrome Dev Tools, Heroku, Netlify, Figma, Adobe Photoshop, Adobe
                XD.
              </p>
              <div className="mt-4">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/mdzobaidurislam/"
                  className="custom_btn"
                >
                  Hire me
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
