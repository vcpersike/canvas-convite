import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Abertura from "./pages/convite/abertura";
import Consagracao from "./pages/convite/consagracao";
import Convite from "./pages/convite/convite";
import NossaHistoria from "./pages/convite/nossa-historia";
import Presente from "./pages/convite/presentes";
import Recepcao from "./pages/convite/recepcao";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Abertura />} />
      <Route path="/convite" element={<Convite />} />
      <Route path="/recepcao" element={<Recepcao />} />
      <Route path="/consagracao" element={<Consagracao />} />
      <Route path="/nossa-historia" element={<NossaHistoria />} />
      <Route path="/presente" element={<Presente />} />
    </Routes>
  );
}

export default MainRouter;
