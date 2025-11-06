import { useState } from "react";

// Classe mãe
class FuncionarioClasse {
    protected nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    // poderia ser private, mas protected deixa a filha usar
    protected calcularBonus(): number {
        return this.salario * 0.1;
    }
}

// Classe filha
class Gerente extends FuncionarioClasse {
    private setor: string;

    constructor(nome: string, salario: number, setor: string) {
        super(nome, salario);  // o super é a ponte entre a classe filha e a classe mãe
        this.setor = setor;
    }

    // aqui conseguimos acessar nome e calcularBonus()
    public resumo(): string {
        const bonus = this.calcularBonus();
        return `Gerente: ${this.nome} | Setor: ${this.setor} | Bônus: R$ ${bonus}`;
    }
}

function Funcionario() {
    const [mensagem, setMensagem] = useState("");

    const testarHeranca = () => {
        const gerente = new Gerente("João", 5000, "Financeiro");
        setMensagem(gerente.resumo());
    };

    return (
        <>
            <button onClick={testarHeranca}>Mostrar Gerente</button>
            <p>{mensagem}</p>
        </>
    );
}

export default Funcionario