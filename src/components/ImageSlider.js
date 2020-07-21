import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Images from "./Images";

const Container = styled.div`
  border: 1px solid orange;
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;
const PrevButton = styled.button`
  border: 1px solid orange;
  display: flex;
  position: absolute;
  top: 50%;
`;
const NextButton = styled.button`
  border: 1px solid orange;
  position: absolute;
  top: 50%;
  right: 0px;
`;

const ImageSlider = (props) => {
  const [slide, setSlide] = useState({
    translate: 0,
    transition: 0.45,
    activeIndex: 0,
  });

  const { translate, transition, activeIndex } = state;

  const getWidth = () => window.innerWidth;

  const prevSlide = () => {};
  const nextSlide = () => {};
  return (
    <Container>
      <Images />
      <PrevButton onClick={prevSlide}>PREV</PrevButton>
      <NextButton onClick={nextSlide}>NEXT</NextButton>
    </Container>
  );
};

export default ImageSlider;
