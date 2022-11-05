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

function Recepcao() {
  let navigate = useNavigate();

  return (
    <Container>
      <div>
        <Introducao>
          <img src={fundoNome} />
        </Introducao>
        <Convidando>
          <p>
            A cerimônia de casamento acontecerá às 11h e logo após será servido
            almoço aos convidados.
          </p>
        </Convidando>
      </div>
      <Enderenco>
        <p>
          Bistrô Maria Rosa
          <span>
            Av. Água Fria, 1608 - Jardim França, São Paulo - SP, 02332-001
          </span>
        </p>
        <a
          href="http://bistromariarosa.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
        <Button onClick={() => navigate("/convite")}>Voltar</Button>
      </Enderenco>
    </Container>
  );
}

export default Recepcao;
