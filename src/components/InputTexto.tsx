import { useState } from "react";

export default function InputTexto() {
    const [nome, setNome] = useState("");

    return (
        <>
            <input
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setNome(e.target.value)}
            />
            <p>Você digitou: {nome}</p>
        </>
    );
}

