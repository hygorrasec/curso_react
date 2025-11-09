import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Somador from "../components/Somador";

describe("Componente Somador", () => {
    it("deve somar dois números corretamente", () => {
        // Renderiza o componente na tela virtual
        render(<Somador />);

        // Localiza os elementos
        const input1 = screen.getByPlaceholderText("Número 1");
        const input2 = screen.getByPlaceholderText("Número 2");
        const botao = screen.getByText("Somar");

        // Simula a digitação e clique
        fireEvent.change(input1, { target: { value: "5" } });
        fireEvent.change(input2, { target: { value: "3" } });
        fireEvent.click(botao);

        // Verifica se o resultado aparece corretamente
        const resultado = screen.getByText("Resultado: 8");
        expect(resultado).toBeInTheDocument();
    });
});
