import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import "./Contact.css";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const Contact = () => {
  return (
    <section class="section" id="contact">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center">
              <h3 className="orangeText">
                Our <span class="font-weight-bold">Contact</span>
              </h3>
              <h1 class="mt-3 mx-auto w-subtitle">
                Have A Any Question to Contact Me?
              </h1>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt-5">
          <div className="col-md-12 col-lg-6 ">
            <div class="row justify-content-center   pb-3">
              <div class="col-md-4 col-lg-12">
                <div class="contact_details mt-2">
                  <div class="ser-icon">
                    <BiPhoneCall />
                  </div>
                  <div class="mt-3">
                    <h5 class="mb-1 contact_detail-title font-weight-bold">
                      Call Us On
                    </h5>
                    <p class="text-muted">+8801890373925</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4  col-lg-12">
                <div class="contact_details mt-2">
                  <div class="ser-icon">
                    <MdEmail />
                  </div>
                  <div class="mt-3">
                    <h5 class="mb-1 contact_detail-title font-weight-bold">
                      Email Us At
                    </h5>
                    <p class="text-muted">md.zobaidurislam@gmail.com</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-12">
                <div class="contact_details mt-2">
                  <div class="ser-icon">
                    <GrContact />
                  </div>
                  <div class="mt-3">
                    <h5 class="mb-1 contact_detail-title font-weight-bold">
                      Address
                    </h5>
                    <p class="text-muted">2050,Sarishabari,Jamalpur</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="social_icon">
              {" "}
              <a
                target="_blank"
                href="https://web.facebook.com/freelancerjami/"
              >
                <AiFillFacebook />
              </a>
              <a target="_blank" href="https://github.com/mdzobaidurislam">
                <AiFillGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mdzobaidurislam/"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
          <div class="col-md-12  col-lg-6">
            <div class="contact-form-area">
              <form action="https://submit-form.com/yb5uwjxM">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group mt-1 ">
                      <input
                        id="name"
                        class="form-control"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mt-1 ">
                      <input
                        required
                        id="email"
                        class="form-control"
                        type="text"
                        name="email"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mt-3 mb-3 ">
                      <input
                        required
                        id="subject"
                        class="form-control"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-3 ">
                      <textarea
                        required
                        name="message"
                        placeholder="Your message"
                        class="form-control"
                        id="message"
                        cols="30"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <button type="submit" class="custom_btn float-right">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
