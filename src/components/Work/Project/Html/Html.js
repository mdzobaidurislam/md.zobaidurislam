import React from "react";
import marvel from "./../../../project/marvel.png";
import company from "./../../../project/company.png";
import merkury from "./../../../project/merkury.png";
import stricts from "./../../../project/stricts.png";
import take from "./../../../project/take.png";
import veer from "./../../../project/veer.png";
import switchpng from "./../../../project/switch.png";
import beatles1 from "./../../../project/beatles1.png";

const Html = () => {
  return (
    <div class="row work-filter mt-5">
      <div class="col-md-6  col-lg-4 seo webdesign">
        <a target="_blank" href="https://web-marvel.netlify.app/">
          <div class="work-items mt-4">
            <div class="work-thum">
              <img src={marvel} class="img-fluid" alt="marvel" />
            </div>
            <div class="work-dateils">
              <p class="mb-2">Marvel</p>
              <h5 class="m-0">Details</h5>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-6  col-lg-4 WORK">
        <a target="_blank" href="https://beatels.netlify.app/">
          <div class="work-items mt-4">
            <div class="work-thum">
              <img src={beatles1} class="img-fluid" alt="beatles1" />
            </div>
            <div class="work-dateils">
              <p class="mb-2">Beatles</p>
              <h5 class="m-0">Details</h5>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-6  col-lg-4 WORK webdesign wordpress">
        <a target="_blank" href="https://web-merkury.netlify.app/">
          <div class="work-items mt-4">
            <div class="work-thum">
              <img src={merkury} class="img-fluid" alt="merkury" />
            </div>
            <div class="work-dateils">
              <p class="mb-2">Merkury</p>
              <h5 class="m-0">Details</h5>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-6  col-lg-4 WORK webdesign wordpress">
        <a target="_blank" href="https://buildcompany.netlify.app/">
          <div class="work-items mt-4">
            <div class="work-thum">
              <img src={company} class="img-fluid" alt="merkury" />
            </div>
            <div class="work-dateils">
              <p class="mb-2">Build Company</p>
              <h5 class="m-0">Details</h5>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-6  col-lg-4 WORK wordpress">
        <a target="_blank" href="https://web-take.netlify.app/">
          <div class="work-items mt-4">
            <div class="work-thum">
              <img src={take} class="img-fluid" alt="take" />
            </div>
            <div class="work-dateils">
              <p class="mb-2">Take</p>
              <h5 class="m-0">Details</h5>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-6  col-lg-4  webdesign">
        <a target="_blank" href="https://mdzubaidul.github.io/veer/">
          <div class="work-items mt-4">
            <div class="work-thum">
              <img src={veer} class="img-fluid" alt="veer" />
            </div>
            <div class="work-dateils">
              <p class="mb-2">Veer</p>
              <h5 class="m-0">Details</h5>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-6  col-lg-4 wordpress webdesign">
        <a target="_blank" href="https://web-switch.netlify.app/">
          <div class="work-items mt-4">
            <div class="work-thum">
              <img src={switchpng} class="img-fluid" alt="switch" />
            </div>
            <div class="work-dateils">
              <p class="mb-2">Switch</p>
              <h5 class="m-0">Details</h5>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-6  col-lg-4 wordpress webdesign">
        <a target="_blank" href="https://web-strict.netlify.app/">
          <div class="work-items mt-4">
            <div class="work-thum">
              <img src={stricts} class="img-fluid" alt="stricts" />
            </div>
            <div class="work-dateils">
              <p class="mb-2">Stricts</p>
              <h5 class="m-0">Details</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Html;
