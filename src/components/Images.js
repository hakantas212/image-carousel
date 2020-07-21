import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const PhotoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const ImageWrapper = styled.div`
  border: 1px solid green;

  .image-item {
    width: 100%;
    height: auto;
    object-fit: cover;
    transform: translateX(-${(props) => props.translate}px);
    transition: transform ease-out ${(props) => props.transition}s;
    height: 100%;
    width: ${(props) => props.width}px;
    display: flex;
  }
`;

const Images = (props) => {
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
      <PhotoContainer>
        {" "}
        {images &&
          images.map((img) => (
            <ImageWrapper key={img.id}>
              <img
                className="image-item"
                alt={img.alt_description}
                src={img.urls.regular}
              />
            </ImageWrapper>
          ))}
      </PhotoContainer>
    </>
  );
};

export default Images;
