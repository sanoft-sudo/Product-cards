import React from "react";
import styled from "styled-components";
import RunningShoes from "./components/products/RunningShoes";
import "./styles.css";
const StyledAppDiv = styled.div`
  margin: 0;
  padding: 0;
`;

export default function App() {
  return (
    <StyledAppDiv>
      <h1>Initial</h1>
      <RunningShoes />
    </StyledAppDiv>
  );
}
