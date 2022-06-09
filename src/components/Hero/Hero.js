import React from "react";
import jami from "./../../logo/jami.png";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero_section">
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
                    I'm creative designer based in New York, and I'm very
                    passionate and dedicated to my work.
                  </p>
                </div>
                <div className="hero_btn d-flex">
                  <div>
                    <a href="/" className="custom_btn">
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
        <a href="#" class="scroll">
          <i class="text-white"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
