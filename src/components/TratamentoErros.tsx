import { useState } from "react";

function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida!");
    }
    return a / b;
}

export default function TratamentoErros() {
    const [mensagem, setMensagem] = useState<string>("");
    const calcular = () => {
        try {
            const resultado = dividir(10, 0);
            setMensagem(`Resultado: ${resultado}`);
        } catch (erro: any) {
            setMensagem(`Erro: ${erro.message}`);
        }
    };

    return (
        <>
            <button onClick={calcular}>Fazer Cálculo</button>
            <p>{mensagem}</p>
        </>
    );
}
