import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Introducao = styled.div`
  margin-bottom: 2rem;
  h2 {
    margin-inline: 6vw;
    font-weight: bold;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: azure;
  }
  p {
    font-size: large;
    margin: 0;
    font-weight: bold;
    color: azure;
  }
`;

export const Convidando = styled.div`
  margin-inline: 6vw;
  margin-bottom: 2rem;
  p {
    font-size: large;
    margin: 0;
    font-weight: bold;
    color: black;
  }
`;

export const Explicando = styled.div`
  margin-inline: 6vw;
  margin-bottom: 2rem;
  p {
    font-size: large;
    font-weight: bold;
    color: black;
  }
  span {
    font-size: large;
    font-weight: bold;
    color: black;
  }
`;

export const Enderenco = styled.div`
  margin-inline: 6vw;
  margin-bottom: 2rem;
  p {
    margin: 0;
    font-size: large;
    font-weight: bold;
    color: black;
  }
  span {
    padding-left: 0.2rem;
    font-size: larger;
    font-weight: bold;
    color: blue;
  }
  a {
    font-size: medium;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: azure;
  }
`;

export const Responsabilidades = styled.div`
  margin-inline: 6vw;
  margin-bottom: 2rem;
  h2 {
    color: red;
  }
  p {
    margin: 0;
    font-size: large;
    font-weight: bold;
    color: black;
    span {
      padding-left: 0.2rem;
      font-size: larger;
      font-weight: bold;
      color: blueviolet;
    }
  }
`;

export const Presentes = styled.div`
  margin-inline: 6vw;
  margin-bottom: 2rem;
  h2 {
    font-weight: bold;
    color: orange;
  }
  p {
    font-size: large;
    margin: 0;
    font-weight: bold;
    color: black;
  }
  span {
    padding-right: 0.2rem;
    font-size: larger;
    font-weight: bold;
    color: orange;
  }
`;
