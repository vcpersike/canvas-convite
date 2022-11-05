import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Container,
  Convidando,
  Enderenco,
  Introducao,
} from "./convite.styled";
import fundoNome from "../../assets/photo3.png";

function Convite() {
  let navigate = useNavigate();

  return (
    <Container>
      <div>
        <Introducao>
          <img src={fundoNome} />
        </Introducao>
        <Convidando>
          <p>
            É com muito amor no coração que desejamos convidá-los para Celebrar
            nossa União na doutrina do Santo Daime, onde o Universo e a
            Espiritualidade nos preparou essa grata surpresa. E estamos
            preparando dois momentos no dia 13/11/2022 às 11h e às 19h
          </p>
        </Convidando>
      </div>
      <Enderenco>
        <Button onClick={() => navigate("/recepcao")}>
          Cerimônia e Recepção
        </Button>
        <Button onClick={() => navigate("/consagracao")}>
          Consagração com Santo Daime
        </Button>
        <Button onClick={() => navigate("/nossa-historia")}>
          Nossa Historia
        </Button>
        <Button onClick={() => navigate("/presente")}>Presentes</Button>
      </Enderenco>
      <p>Nos enche de alegria ter vocês ao nosso lado</p>
    </Container>
  );
}

export default Convite;
