import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Enderenco,
  Explicando,
  Responsabilidades,
} from "./convite.styled";

function Consagracao() {
  let navigate = useNavigate();

  return (
    <Container>
      <div>
        <Explicando>
          <span>
            A segunda parte da nossa celebração será na Doutrina do Santo Daime,
            com a participação espontânea dos convidados, seguindo a preparação
            necessária.
          </span>
        </Explicando>
      </div>
      <Enderenco>
        <p>
          A consagração na medicina acontecerá às 19h
          <span>
            CEEU (Centro de Estudos Espiritualistas Universalista) Luz da Rainha
            Rua Rio Grande, 322 - Estância Santa Maria do Portao, Atibaia - SP
          </span>
        </p>
      </Enderenco>
      <Responsabilidades>
        <h2>Preparação</h2>
        <p>
          Para participar será necessário a confirmação até sábado dia 12/11 com
          a Madrinha Lúcia, para organizar sua visita e fazer uma anamnese
          prévia. Contribuição de R$50 Tel:+55 11 99839-2299 ;{" "}
        </p>
        <h2>
          “Dentro desta Doutrina Entreguei meu coração Nessa Santa Medicina Da
          Virgem da Conceição”
        </h2>
        <p>Encantos da Rainha</p>
        <Button onClick={() => navigate("/convite")}>Voltar</Button>
      </Responsabilidades>
    </Container>
  );
}

export default Consagracao;
