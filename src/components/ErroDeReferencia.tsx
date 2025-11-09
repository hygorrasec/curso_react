import { useState } from "react";

export default function ErroDeReferencia() {
    const [mensagem, setMensagem] = useState<string>("");

    const testarErro = () => {
        try {
            // Simulando um ReferenceError
            // Estamos tentando usar uma variável que não foi declarada
            console.log(variavelInexistente); // isso vai gerar ReferenceError

            setMensagem("Tudo certo! Nenhum erro encontrado.");
        } catch (erro: any) {
            // "instanceof" verifica se o erro é um ReferenceError
            if (erro instanceof ReferenceError) {
                setMensagem(`Erro de Referência: ${erro.message}`);
            } else {
                setMensagem(`Outro tipo de erro: ${erro.message}`);
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
