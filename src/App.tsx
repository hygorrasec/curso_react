import { useState } from "react";
import CursoReact from "./components/CursoReact"
import Botao from "./components/Botao"
import InputTexto from "./components/InputTexto"
import InputNome from "./components/InputNome";
import ExibeNome from "./components/ExibeNome";

function App() {
  const [nome, setNome] = useState("");
  return (
    <>
      <CursoReact />
      <Botao />
      <InputTexto />
      <InputNome onNomeChange={setNome} />
      <ExibeNome nome={nome} />
    </>
  )
}

export default App
