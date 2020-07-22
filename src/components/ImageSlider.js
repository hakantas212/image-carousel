import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  border: 5px solid orange;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  height: auto;

  button {
    border: 1px solid orange;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
  }
`;

const PrevButton = styled.button`
  left: 0;
`;
const NextButton = styled.button`
  right: 0;
`;

const PhotoContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  transition: transform ease-out 0.3s;
`;
const ImageWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100%;

  img {
    width: 900px;
    height: 500px;
    object-fit: contain;
    margin: 0 auto;
  }
`;

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [images, setImages] = useState();

  const accessKey =
    "d5aeca2e0d9de8c9724b8ccffa6e1c7f0b9eefd73acc42ce1d64be3b421f8ad9";

  useEffect(() => {
    fetchImages();
    const interval = setInterval(() => {
      if (index === 0) {
        return setTranslateX(translateX + -slideWidth());
      } else if (index === 1) {
        return setTranslateX(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [translateX, index]);

  const fetchImages = () => {
    axios
      .get(
        `https://api.unsplash.com/users/hakantas212/photos/?&per_page=50&client_id=${accessKey}`
      )
      .then((res) => {
        setImages(res.data);
      })
      .catch((error) => {});
  };

  const handlePrev = () => {
    if (index === 0) {
      setTranslateX(translateX);
    } else {
      setIndex(index - 1);
      setTranslateX(translateX + slideWidth());
    }
  };

  const handleNext = () => {
    if (index === images.length - 1) {
      setIndex(0);
      setTranslateX(0);
    } else {
      setIndex(index + 1);
      setTranslateX(translateX + -slideWidth());
    }
  };

  const slideWidth = () => {
    console.log(document.querySelector(".slider-container").clientWidth);
    return document.querySelector(".slider-container").clientWidth;
  };
  return (
    <Container>
      <PhotoContainer
        className="slider-container"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {" "}
        {images &&
          images.map((img, i) => (
            <ImageWrapper className="image-wrapper" key={i}>
              <img alt={img.alt_description} src={img.urls.regular} />
            </ImageWrapper>
          ))}
      </PhotoContainer>{" "}
      <PrevButton onClick={handlePrev}>PREV</PrevButton>
      <NextButton onClick={handleNext}>NEXT</NextButton>
    </Container>
  );
};

export default ImageSlider;
