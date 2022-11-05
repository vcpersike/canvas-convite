import React, { useState } from "react";
import Gifs from "../../components/gif";
import Convite from "./convite";
import { AberturaGifs } from "./convite.styled";


function Abertura() {
    const [looding, setLooding] = useState(true);

  setTimeout(() => {
    setLooding(false);
  }, 7000);

  return (
    <AberturaGifs>
        {!looding && <Convite/>}
        {looding && <Gifs/>}
    </AberturaGifs>
  );
}

export default Abertura;
