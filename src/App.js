import React from "react";
import { Ios, Android } from "./components/Phone";
import styled from "styled-components";
import PhoneImage from "./Alert.png";
import AndroidImage from "./Courses.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #181818;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Ios image={PhoneImage} />
      <Android image={AndroidImage} />
    </Container>
  );
};

export default App;
