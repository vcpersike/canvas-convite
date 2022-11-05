import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Presentes } from "./convite.styled";
import fundoNome from "../../assets/photo3.png";

function Presente() {
  let navigate = useNavigate();

  return (
    <Container>
      <Presentes>
        <img src={fundoNome} />
        <h2>Presentes</h2>
        <p>Moramos juntos há algum tempo e nossa casinha está montada.</p>
        <p>
          Se você sente no coração de nos enviar um presente, nossa sugestão é
          colaborar com a nossa Lua de Mel, nos enviado um pix na chave
          vcpersike@gmail.com
        </p>
        <p>
          Isso é somente uma sugestão, a sua presença em nossas vidas já é nosso
          maior presente.
        </p>

        <Button onClick={() => navigate("/convite")}>Voltar</Button>
      </Presentes>
    </Container>
  );
}

export default Presente;
