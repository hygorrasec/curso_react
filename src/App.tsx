import InputControlado from "./components/InputControlado"
import Formulario from "./components/Formulario"
import Titulo from "./components/Titulo"
import Botao from "./components/Botao/Botao";
import Caixa from "./components/Caixa";

function App() {
  return (
    <>
      <InputControlado />
      <Formulario />
      <Titulo />
      <Botao texto="Clique Aqui" />
      <Caixa />
    </>
  )
}

export default App
