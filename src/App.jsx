import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import styled from "styled-components";
import GlobalStyles from "./components/Global.styled";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Container className="App">
        <Card />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1e1a33;
  display: flex;
  justify-content: center;
  align-items: center;
`;
