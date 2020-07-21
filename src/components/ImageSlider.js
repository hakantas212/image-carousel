import React from "react";
import styled from "styled-components";
import Image from "./Images";

const Container = styled.div`
  background-color: orange;
  width: 100%;
  height: 70%;
`;

const ImageSlider = () => {
  return (
    <Container>
      <Image></Image>
    </Container>
  );
};

export default ImageSlider;
