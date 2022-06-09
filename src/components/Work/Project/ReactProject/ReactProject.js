import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import SpinnerLoading from "../../../Share/SpinnerLoading";
const ReactProject = () => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const location = useLocation();
  console.log(location.pathname.split("/")[1]);
  const slug = location.pathname.split("/")[1];
  useEffect(() => {
    const getProjectBYcat = async () => {
      const url = `https://portfolio-server-zobaidur.herokuapp.com/api/project?cat=${slug}`;
      const { data } = await axios.get(url);
      setCategory(data);
      setLoading(true);
    };
    getProjectBYcat();
  }, [slug]);

  if (!loading) {
    return <SpinnerLoading />;
  }

  return (
    <div class="row work-filter mt-5">
      {category.map((item, index) => (
        <div class="col-md-6 col-lg-4" key={item._id}>
          <Link to={`/details/${item._id}`}>
            <div class="work-items mt-4">
              <div class="work-thum">
                <img src={item.img} class="img-fluid" alt="merkury" />
              </div>
              <div
                className="des"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <div class="work-dateils">
                <p class="mb-2">{item.name}</p>
                <h5 class="m-0 orangeText">Details</h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ReactProject;
