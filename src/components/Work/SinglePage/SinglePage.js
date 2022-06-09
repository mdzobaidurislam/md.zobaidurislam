import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./SinglePage.css";
import axios from "axios";

const SinglePage = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getProjectBYcat = async () => {
      const url = `https://portfolio-server-zobaidur.herokuapp.com/api/project/${id}`;
      const { data } = await axios.get(url);
      setProduct(data);
      setLoading(true);
    };
    getProjectBYcat();
  }, [id]);

  // if (!loading) {
  //   return <SpinnerLoading />;
  // }
  console.log(product);
  return (
    <>
      <section class="breadcrumb-area bannner-1">
        <div class="b-text-block">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class=" text-center">
                  <h2>{product.name}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project_section  pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="thum pt-5 pb-5">
                <img src={product.img} alt="" className="img-fluid" />
              </div>
              <div className="project_title text-center pt-5 pb-5">
                <h1>{product.name}</h1>
              </div>
              <div
                className="des"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              <div className="pt-5 text-center mt-5 mb-5">
                <div className="row">
                  <div className="col-md-4 col-lg-4 mb-3">
                    {product.link && (
                      <div>
                        <a
                          href={product.link}
                          target="_blank"
                          className="custom_btn me-lg-4 d-block"
                        >
                          Live demo
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="col-md-4 col-lg-4 mb-3 ">
                    {product.client_link && (
                      <div>
                        <a
                          href={product.client_link}
                          target="_blank"
                          className="custom_btn me-lg-4 d-block"
                        >
                          Client Code
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="col-md-4 col-lg-4 mb-3">
                    {product.server_link && (
                      <div>
                        <a
                          href={product.server_link}
                          target="_blank"
                          className="custom_btn me-lg-4 d-block"
                        >
                          Server Code
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePage;
