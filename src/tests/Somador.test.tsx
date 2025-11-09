// describe: agrupa testes relacionados
// it: representa um teste individual
// expect: faz as verificações
import { describe, it, expect } from "vitest";

// render: "renderiza" o componente em um ambiente de teste (sem abrir navegador)
// screen: permite buscar elementos na tela simulada (por texto, placeholder, etc.)
// fireEvent: simula ações do usuário (cliques, digitação, etc.)
import { render, screen, fireEvent } from "@testing-library/react";

// Importando o componente Somador que será testado
import Somador from "../components/Somador";

// Cria um grupo de testes chamado "Componente Somador" (o nome você que escolhe)
describe("Componente Somador", () => {

    // Define um teste específico dentro do grupo
    // A descrição serve para saber o que esse teste deve garantir
    it("deve somar dois números corretamente", () => {

        // Renderiza o componente <Somador /> em uma tela virtual controlada pelo teste
        render(<Somador />);

        // Usa o 'screen' para encontrar os elementos do componente pelo placeholder e texto
        const input1 = screen.getByPlaceholderText("Número 1"); // campo do primeiro número
        const input2 = screen.getByPlaceholderText("Número 2"); // campo do segundo número
        const botao = screen.getByText("Somar");                // botão de soma

        // Simula a interação do usuário:
        // O usuário digita "5" e "3" nos campos e clica no botão "Somar"
        fireEvent.change(input1, { target: { value: "5" } });
        fireEvent.change(input2, { target: { value: "3" } });
        fireEvent.click(botao);

        // Após clicar, o componente deve exibir o resultado correto
        // O screen procura o texto "Resultado: 8" na tela virtual
        const resultado = screen.getByText("Resultado: 8");

        // O 'expect' verifica se o elemento realmente foi encontrado/renderizado
        // Se estiver na tela, o teste passa; se não estiver, o teste falha.
        expect(resultado).toBeInTheDocument();
    });
});
