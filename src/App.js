import Canvas from "./components/Canvas";
import Convite from "./pages/convite/convite";
import { AppContainer } from "./theme/app.styled";

function App() {
  return (
    <AppContainer >
        <Convite/>
        <Canvas/>
    </AppContainer>
  );
}

export default App;
