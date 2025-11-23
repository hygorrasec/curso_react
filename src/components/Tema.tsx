import { useState } from "react";

export default function Tema() {
    const [tema, setTema] = useState("claro");
    const trocarTema = () => setTema(tema === "claro" ? "escuro" : "claro");
    return (
        <>
            <h1>Tema: {tema}</h1>
            <button onClick={trocarTema}>Trocar Tema</button>
        </>
    )
}

