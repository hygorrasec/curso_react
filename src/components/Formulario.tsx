import { useState } from "react";

export default function Formulario() {
    const [nome, setNome] = useState("");

    function enviar(e: React.FormEvent) {
        e.preventDefault();  // impede o recarregamento automático da página.
        alert(`Enviado: ${nome}`);
    }

    return (
        <form onSubmit={enviar}>
            <input
                type="text"
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome"
            />
            <button type="submit">Enviar</button>
        </form>
    );
}

