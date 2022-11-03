import React, { useRef } from "react";
import {
  Container,
  Convidando,
  Enderenco,
  Explicando,
  Introducao,
  Presentes,
  Responsabilidades,
} from "./convite.styled";

function Convite() {
  return (
    <Container>
      <div>
        <Introducao>
          <h2>
            “Dentro desta Doutrina Entreguei meu coração Nessa Santa Medicina Da
            Virgem da Conceição”
          </h2>
          <p>Encantos da Rainha</p>
        </Introducao>
        <Convidando>
          <p>
            É com muito amor no coração que desejamos convidá-los para celebrar
            nossa união na doutrina do Santo Daime! “Mas como assim?! Vocês vão
            casar?!” Pois é, esse não era um sonho cultivado desde a infância,
            mas o universo e a espiritualidade nos preparam gratas surpresas
            nessa existência!
          </p>
        </Convidando>
        <Explicando>
          <p>
            O desejo de selar essa união veio durante o feitio da medicina da
            Ayahuasca no CEEU (Centro de Estudos Espiritualistas Universalista)
            Luz da Rainha de uma maneira inusitada e direta. Em uma conversa
            antes do ritual de encerramento Victor fala para a Fernanda: “- O
            Bruno e Déa disseram que tem casamento no Daime… Você quer casar
            aqui?”. E percebendo que esse era um pedido de casamento, algo que
            não estava nos planos, mas que fazia todo sentido acontecer nesta
            irmandade, nesta casa e na doutrina do Santo Daime. E aqui estamos,
            reafirmando nosso amor no plano terrestre e sobretudo no plano
            Astral.
          </p>
          <span>
            Nossa celebração será dividida em dois momentos no dia 13/11/2022. Em São Paulo
            faremos a cerimônia e a confraternização, apenas um almoço. Quem
            desejar consagrar a medicina do Santo Daime deverá se dirigir para a
            igreja em Atibaia. Pedimos confirmação e contribuição de R$50,00
            para essa segunda parte da celebração.
          </span>
        </Explicando>
      </div>
      <Enderenco>
        <p>
          Endereço da cerimônia
          <span>
             Av. Água Fria, 1608 - Jardim Franca, São Paulo - SP, 02332-001
          </span>
        </p>
        <a
          href="http://bistromariarosa.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aqui está o link para o Site onde será realizada a cerimônia
        </a>
        <p>
          Endereço da consagração do Santo Daime
          <span>
            R. Rio Grande, 322 - Estancia Santa Maria do Portao, Atibaia - SP
          </span>
        </p>
      </Enderenco>
      <Responsabilidades>
        <h2>
            Precauções
        </h2>
        <p>Caso queira partircipar da consagração do Santo Daime, pedimos que entre em contato com a responsável da igreja Madrinha<span>Lucia</span>, para que possa fazer sua anamnese previa. Se possível faça esse contato até dia 12 sábado, para a organização do local.</p>
        <p>Contato Tel:<span>+55 11 99839-2299</span> </p>
      </Responsabilidades>
      <Presentes>
        <h2>Presentes</h2>
        <p>
          Como já moramos juntos a algum tempo, temos nossa casinha montada já,
          então vamos deixar nossos dados para <span>UM PIX</span> rs. Sintam-se
          avontade para contribuir com o seu coração e o que bolso permitir.
        </p>
        <p>Victor Email: vcpersike@gmail.com</p>
      </Presentes>
    </Container>

  );
}

export default Convite;
