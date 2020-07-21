import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const PhotoContainer = styled.div``;

const Images = () => {
  const [images, setImages] = useState();

  const accessKey =
    "d5aeca2e0d9de8c9724b8ccffa6e1c7f0b9eefd73acc42ce1d64be3b421f8ad9";

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios
      .get(
        `https://api.unsplash.com/users/hakantas212/photos/?&per_page=50&client_id=${accessKey}`
      )
      .then((res) => {
        setImages(res.data);
        console.log(res.data);
      })
      .catch((error) => {});
  };

  return (
    <>
      {" "}
      {images &&
        images.map((img) => (
          <li key={img.id}>
            <img
              onClick={() => {
                setImages(img.urls.regular);
              }}
              className="grid__item"
              alt={img.alt_description}
              src={img.urls.regular}
            />
          </li>
        ))}
    </>
  );
};

export default Images;
