import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./SinglePage.css";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SpinnerLoading from "./../../Share/SpinnerLoading";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!loading) {
    return <SpinnerLoading />;
  }
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
              {product?.img_attr?.length > 0 ? (
                <Slider {...settings}>
                  {product?.img_attr.map((item, index) => (
                    <div>
                      <div className="thum pt-5 pb-5">
                        <img
                          src={item?.img_attr_link}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="thum pt-5 pb-5">
                  <img src={product?.img} alt="" className="img-fluid" />
                </div>
              )}

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
