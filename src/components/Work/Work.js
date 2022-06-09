import React from "react";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import "./Work.css";
const Work = () => {
  return (
    <section class="section" id="work">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center work_area">
              <h3 class="orangeText">Portfolio.</h3>
              <div class="name">
                <h3>My Awesome Project</h3>
              </div>
              <p class="mt-3 mx-auto w-subtitle">
                It is a long established fact that a reader will be of a page
                when established fact looking at its layout.
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-12 text-center">
            <ul class="work_menu" id="menu-filter">
              <li class="list-inline-item">
                <NavLink to="/all">All</NavLink>
              </li>
              <li class="list-inline-item">
                <NavLink to="/html">Html</NavLink>
              </li>
              <li class="list-inline-item">
                <NavLink to="/react">React</NavLink>
              </li>
              <li class="list-inline-item">
                <NavLink to="/">Node Js</NavLink>
              </li>
              <li class="list-inline-item">
                <NavLink to="/all">Wordpress</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <Outlet />
      </div>
    </section>
  );
};

export default Work;
