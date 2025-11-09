import { useState, useEffect } from "react";

export default function Temporizador() {
    const [tempo, setTempo] = useState(0);

    // useEffect controla efeitos colaterais, como o setInterval
    useEffect(() => {
        // Quando o componente é montado, cria um intervalo que roda a cada 1 segundo
        const intervalo = setInterval(() => {
            // Atualiza o estado 'tempo' somando +1 a cada segundo
            // Usamos a forma (t) => t + 1 para garantir que pegamos o valor mais recente do estado
            setTempo((t) => t + 1);
        }, 1000);

        // A função retornada é chamada automaticamente quando:
        // - o componente é desmontado (removido da tela)
        // - ou quando o useEffect é reexecutado (nesse caso não é, pois o array está vazio)
        return () => {
            // Aqui limpamos o intervalo, evitando múltiplos timers ou vazamento de memória
            clearInterval(intervalo);
            console.log("Temporizador limpo!");
        };
        
        // O array vazio [] faz o efeito rodar apenas uma vez, na montagem
    }, []);

    // Renderiza o tempo na tela
    return <h1>Tempo: {tempo}s</h1>;
}
