import { useState } from "react";

export default function ValidacaoSimples() {
    const [entrada, setEntrada] = useState<string>("");
    const [mensagem, setMensagem] = useState<string>("");
    console.log('Entrada: ' + entrada);  // Apenas para debugar e entender como funcionar o onChange do "input"

    const converterNumero = () => {
        try {
            const numero = Number(entrada);

            if (isNaN(numero)) {  // Indica se o valor não é um número (NaN = not a number).
                throw new Error("Digite um número válido!");
            }

            const dobro = numero * 2;
            setMensagem(`O dobro de ${numero} é ${dobro}`);
        } catch (erro: any) {
            setMensagem(`Erro: ${erro.message}`);
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="Digite um número"
                value={entrada}
                onChange={(e) => setEntrada(e.target.value)}
            />
            <button onClick={converterNumero}>Converter</button>
            <p>{mensagem}</p>
        </>
    );
}
