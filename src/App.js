import React from "react";
import styled from "styled-components";

const StyledAppDiv = styled.div`
  margin: 0;
  padding: 0;
  background: url("http://akveo.com/blur-admin/assets/img/blur-bg-blurred.jpg");
  position: fixed;
  width: 100%;
  height: 100%;
`;

export default function App() {
  return (
    <StyledAppDiv>
      <h1>Initial</h1>
    </StyledAppDiv>
  );
}
