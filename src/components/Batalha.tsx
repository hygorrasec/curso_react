import { useState } from "react";

export default function Batalha() {
    const [heroi, setHeroi] = useState({ nome: "Herói", vida: 100 });
    const [vilao, setVilao] = useState({ nome: "Vilão", vida: 100 });

    const atacar = () => {
        const dano = 30;
        setVilao((dados) => ({
            ...dados,  // ("..." spread operator) espalha (ou copia) todas as chaves e valores do objeto atual
            vida: Math.max(0, dados.vida - dano)  // Agora podemos sobrescrever qualquer chave que quiser no mesmo objeto
        }));
        // Sem usar o spread operator, teriamos que copiar todas as chaves.
        // setVilao((dados) => {
        //     return {
        //         nome: dados.nome,
        //         vida: Math.max(0, dados.vida - dano)
        //     };
        // });
    };

    return (
        <div>
            <h2>Batalha entre {heroi.nome} e {vilao.nome}</h2>
            <p>{heroi.nome}: {heroi.vida}</p>
            <p>{vilao.nome}: {vilao.vida}</p>

            <button onClick={atacar}>Atacar</button>

            {vilao.vida <= 0 && <p>{heroi.nome} venceu!</p>}
        </div>
    );
}
