import { useState } from "react";

export default function ErroDeSintaxe() {
    const [mensagem, setMensagem] = useState<string>("");

    const testarErro = () => {
        try {
            // Simulando erro de sintaxe ao tentar interpretar JSON inválido
            const texto = '{"nome": "João", "idade": 18'; // faltou o fechamento }
            const dados = JSON.parse(texto); // Serve para converter uma string no formato JSON em um objeto JavaScript real. Nesse caso, vai gerar SyntaxError
            setMensagem(`JSON válido! Nome: ${dados.nome}`);
        } catch (erro: any) {
            if (erro instanceof SyntaxError) {  // "instanceof" serve para verificar se um objeto foi criado a partir de uma classe específica (ou herdada dela).
                setMensagem(`Erro de Sintaxe: ${erro.message}`);
            } else {
                setMensagem(`Outro erro: ${erro.message}`);
            }
        }
    };

    return (
        <>
            <button onClick={testarErro}>Testar Erro</button>
            <pre>{mensagem}</pre>
        </>
    );
}
