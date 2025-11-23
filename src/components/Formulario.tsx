import { useState } from "react";

export default function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    function enviar(e: React.FormEvent) {
        e.preventDefault();
        console.log("Nome:", nome);
        console.log("Email:", email);
    }

    return (
        <form onSubmit={enviar}>
            <input value={nome} onChange={(e) => setNome(e.target.value)} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Enviar</button>
        </form>
    );
}

