import { useState } from "react";

export default function InputControlado() {
    const [nome, setNome] = useState("");

    return (
        <div>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
            />

            <p>Você digitou: {nome}</p>
        </div>
    );
}

