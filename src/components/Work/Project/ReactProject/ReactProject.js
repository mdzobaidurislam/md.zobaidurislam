import React from "react";

const ReactProject = () => {
  return (
    <div class="row work-filter mt-5">
      <div class="col-lg-4 WORK webdesign wordpress">
        <a target="_blank" href="https://web-merkury.netlify.app/">
          <div class="work-items mt-4">
            <div class="work-thum">
              <img
                src="./images/project/merkury.png"
                class="img-fluid"
                alt="merkury"
              />
            </div>
            <div class="work-dateils">
              <p class="mb-2">Merkury</p>
              <h5 class="m-0">Project Merkury</h5>
            </div>
          </div>
        </a>
      </div>
      <div class="col-lg-4 WORK webdesign wordpress">
        <a target="_blank" href="https://buildcompany.netlify.app/">
          <div class="work-items mt-4">
            <div class="work-thum">
              <img
                src="./images/project/company.png"
                class="img-fluid"
                alt="merkury"
              />
            </div>
            <div class="work-dateils">
              <p class="mb-2">Build Company</p>
              <h5 class="m-0">Project Company</h5>
            </div>
          </div>
        </a>
      </div>
      <div class="col-lg-4 WORK wordpress">
        <a target="_blank" href="https://web-take.netlify.app/">
          <div class="work-items mt-4">
            <div class="work-thum">
              <img
                src="./images/project/take.png"
                class="img-fluid"
                alt="take"
              />
            </div>
            <div class="work-dateils">
              <p class="mb-2">Take</p>
              <h5 class="m-0">Project Take</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ReactProject;
