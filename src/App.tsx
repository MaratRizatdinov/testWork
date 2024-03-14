import React from "react";
import { AppRoutes } from "./routes";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: #f5f5f5;
    font-family:  Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    width: 100%;
    height: 100%;  
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
