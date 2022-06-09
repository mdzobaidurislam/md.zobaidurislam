import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import "./Contact.css";
const Contact = () => {
  return (
    <section class="section" id="contact">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center">
              <h2>
                Our <span class="font-weight-bold">Contact</span>
              </h2>
              <p class="mt-3 mx-auto w-subtitle">
                It is a long established fact that a reader will be of a page
                when established fact looking at its layout.
              </p>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt-5">
          <div className="col-lg-6">
            <div class="row justify-content-center   pb-3">
              <div class="col-lg-12">
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
              <div class="col-lg-12">
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
              <div class="col-lg-12">
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
          </div>
          <div class="col-lg-6">
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
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mt-1 ">
                      <input
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
