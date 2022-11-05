import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  p{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Shalimar";
    font-weight: 600;
    font-size: 38px;
    color: #b1ffed;
  }
`;

export const Introducao = styled.div`
  margin-bottom: 2rem;
  img {
    width: 30vw;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.6) 8px 16px 20px 0px;
  }
  h2 {
    font-family: "Shalimar";
    font-weight: 600;
    font-size: 38px;
    color: #b1ffed;
  }
  p {
    font-family: "Shalimar";
    font-size: 38px;
    margin: 0;
    color: #b1ffed;
  }
`;

export const Convidando = styled.div`
  margin-inline: 6vw;
  margin-bottom: 2rem;
  p {
    font-family: "Shalimar";
    font-size: 38px;
    margin: 0;
    color: #b1ffed;
  }
`;

export const Explicando = styled.div`
  margin-inline: 6vw;
  margin-bottom: 2rem;
  p {
    font-family: "Shalimar";
    font-size: 38px;
    color: #b1ffed;
  }
  span {
    font-family: "Shalimar";
    font-weight: 600;
    font-size: 38px;
    color: #b1ffed;
  }
`;

export const Enderenco = styled.div`
  margin-inline: 6vw;
  margin-bottom: 2rem;
  p {
    margin: 0;
    font-family: "Shalimar";
    font-size: 38px;
    color: #b1ffed;
  }
  span {
    padding-left: 1rem;
    font-family: "Shalimar";
    font-size: 38px;
    color: #b1ffed;
  }
  a {
    font-family: "Shalimar";
    font-size: 32px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-decoration: none;
    color: #b1ffed;
  }
`;

export const Responsabilidades = styled.div`
  margin-inline: 6vw;
  margin-bottom: 2rem;
  h2 {
    font-family: "Shalimar";
    font-weight: 800;
    font-size: 38px;
    color: #b1ffed;
  }
  p {
    margin: 0;
    font-family: "Shalimar";
    font-size: 38px;
    color: #b1ffed;
    span {
      padding-left: 0.2rem;
      color: #b1ffed;
    }
  }
  a {
    text-decoration: none;
  }
`;

export const Presentes = styled.div`
  margin-inline: 6vw;
  margin-bottom: 2rem;
  img {
    width: 50vw;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.6) 8px 16px 20px 0px;
  }
  h2 {
    font-family: "Shalimar";
    font-weight: 400;
    font-size: 42px;
    color: #b1ffed;
  }
  p {
    margin: 0;
    font-family: "Shalimar";
    font-size: 38px;
    color: #b1ffed;
  }
  span {
    margin: 0;
    font-family: "Shalimar";
    font-size: 38px;
    color: #b1ffed;
    padding-right: 0.2rem;
  }
  a {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  padding-inline: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 36px;
  margin-bottom: 1rem;
  margin-top: 1rem;
  background-color: #aa00ca;
  border: 4px solid #08fbc2;
  box-shadow: rgba(0, 0, 0, 0.4) 4px 7px 9px 0px;
  font-family: "Shalimar";
    font-size: 38px;
    color: #b1ffed;
    cursor: pointer;
`;

export const AberturaGifs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
