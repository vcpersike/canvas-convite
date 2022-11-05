import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Convidando,
  Introducao,
} from "./convite.styled";
import fundoNome from "../../assets/photo3.png";

function NossaHistoria() {
  let navigate = useNavigate();

  return (
    <Container>
      <div>
        <Introducao>
          <img src={fundoNome} />
        </Introducao>
        <Convidando>
          <p>Mas como assim?!</p>
          <p>Vocês vão casar?!</p>
          <p>
            Pois é, esse não era um sonho cultivado desde a infância, universo e
            a espiritualidade nos preparou essa gratas surpresas nessa
            existência!
          </p>
          <p>
            O desejo de selar essa união veio durante o feitio da medicina da
            Ayahuasca no CEEU Luz da Rainha de uma maneira inusitada e direta.
          </p>
          <p>
            Em uma conversa antes do ritual de encerramento Victor fala para a
            Fernanda:
          </p>
          <p>“- O Bruno e Déa disseram que tem casamento no Daime…</p>
          <p>Você quer casar aqui?”</p>
          <p>
            E percebendo que esse era um pedido de casamento, algo que não
            estava nos planos, mas que fazia todo sentido acontecer nesta
            irmandade, nesta casa e na doutrina do Santo Daime.
          </p>
          <p>
            E aqui estamos, reafirmando nosso amor no plano terrestre e
            sobretudo no plano Astral.
          </p>
        </Convidando>
        <Button onClick={() => navigate("/convite")}>Voltar</Button>
      </div>
    </Container>
  );
}

export default NossaHistoria;
