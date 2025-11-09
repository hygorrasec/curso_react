import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Batalha from "../components/Batalha";

describe("Componente Batalha", () => {
    it("deve exibir os dois jogadores com vida inicial 100", () => {
        render(<Batalha />);

        // confere se o texto inicial está aparecendo
        expect(screen.getByText("Herói: 100")).toBeInTheDocument();
        expect(screen.getByText("Vilão: 100")).toBeInTheDocument();
    });

    it("deve reduzir a vida do vilão para 70 ao atacar uma vez", () => {
        render(<Batalha />);

        const botao = screen.getByText("Atacar");
        fireEvent.click(botao);

        // depois de 1 ataque (30 de dano), vilão deve ficar com 70
        expect(screen.getByText("Vilão: 70")).toBeInTheDocument();
    });

    it("deve mostrar mensagem de vitória quando o vilão chegar a 0 ou menos", () => {
        render(<Batalha />);

        const botao = screen.getByText("Atacar");

        // 4 ataques = 120 de dano → vida vai pra 0
        fireEvent.click(botao);
        fireEvent.click(botao);
        fireEvent.click(botao);
        fireEvent.click(botao);

        // confere se mostrou a mensagem
        expect(screen.getByText("Herói venceu!")).toBeInTheDocument();
        // e se o vilão ficou com 0
        expect(screen.getByText("Vilão: 0")).toBeInTheDocument();
    });
});
