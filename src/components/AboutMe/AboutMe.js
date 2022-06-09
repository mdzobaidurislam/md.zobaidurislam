import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutme from "./../../logo/jami.png";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="section_pd">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="about_me">
              <div className="about_thum">
                <img src={aboutme} className="w-100" alt="" />
              </div>
              <h3>MD. ZOBAIDUR ISLAM</h3>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
