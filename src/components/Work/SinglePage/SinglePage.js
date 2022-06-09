import React, { useState } from "react";
import { useParams } from "react-router";

const SinglePage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id);
  return <div></div>;
};

export default SinglePage;
