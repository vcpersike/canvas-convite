import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #6E027C;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  body::-webkit-scrollbar-track {
    background-color: #AA00CA;
}
body::-webkit-scrollbar {
    width: 6px;
    background: #AA00CA;
}
body::-webkit-scrollbar-thumb{
    background: #00FFAD;
    border-radius: 40px;
}
`;

export default GlobalStyle;
