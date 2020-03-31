import React from "react";
import { Ios, Android } from "./components/Phone";
import styled from "styled-components";
import PhoneImage from "./Alert.png";
import AndroidImage from "./Courses.png";

const Container = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const Img = styled.img`
  height: 300px;
  width: auto;
`;

const App = () => {
  return (
    <Container>
      <Ios
        image={"https://device-mockup.now.sh/static/media/Courses.6246d440.png"}
      />
      <Android image={AndroidImage} />
      <Img src={PhoneImage} />
      <Img src={AndroidImage} />
    </Container>
  );
};

export default App;
