import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background: #222222;
  width: 375px;
  height: 800px;
  border-radius: 44px;
  box-shadow: 100px 80px 80px rgba(0, 0, 0, 0.4),
    inset 20px 8px 20px rgba(255, 255, 255, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Screen = styled.div`
  width: 98%;
  height: 98%;
  background: #1e1e1e;
  border-radius: 45px;
  box-shadow: inset 20px 2px 20px rgba(255, 255, 255, 0.05),
    inset -20px -2px 20px rgba(0, 0, 0, 0.2);
  z-index: 1;
  background: ${props => (props.image ? `url(${props.image})` : "#1e1e1e")};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Speaker = styled.div`
  z-index: 4;
  width: 50px;
  height: 4px;
  background: #121212;
  position: absolute;
  top: 1.2rem;
  border-radius: 4px;
`;

const PowerBtn = styled.div`
  width: 3px;
  height: 45px;
  background: #282828;
  position: absolute;
  z-index: 3;
  right: -3px;
  top: 8rem;
`;

const VolumeBtn = styled.div`
  width: 3px;
  height: 90px;
  background: #282828;
  position: absolute;
  z-index: 3;
  left: -3px;
  top: 10rem;
`;

const SilentBtn = styled.div`
  width: 3px;
  height: 25px;
  background: #282828;
  position: absolute;
  z-index: 3;
  left: -3px;
  top: 6rem;
`;

const Notch = styled.div`
  width: 50%;
  height: 40px;
  z-index: 3;
  position: absolute;
  top: 1px;
  border-radius: 0 0 15px 15px;
  background: #2a2a2a;
`;

export const Ios = ({ image }) => {
  return (
    <Container>
      <Speaker />
      <SilentBtn />
      <Screen image={image} />
      <Notch />
      <PowerBtn />
      <VolumeBtn />
    </Container>
  );
};

export const Android = ({ image }) => {
  return (
    <Container>
      <Speaker />
      <Screen image={image} />
      <PowerBtn />
      <VolumeBtn />
    </Container>
  );
};
