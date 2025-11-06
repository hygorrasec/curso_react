import { useState } from "react";

// classe pedida no exercício
class AlunoClasse {
    constructor(
        public nome: string,
        private nota1: number,
        private nota2: number
    ) { }

    calcularMedia(): number {
        return (this.nota1 + this.nota2) / 2;
    }

    exibirResultado(): string {
        let resultado = '';
        const media = this.calcularMedia();
        if (media >= 7) {
            resultado = `Aprovado com média ${media.toFixed(1)}`
        } else {
            resultado = `Reprovado com média ${media.toFixed(1)}`
        }
        return resultado
    }

    atualizarNota1(novaNota: number): void {
        if (novaNota >= 0 && novaNota <= 10) {
            this.nota1 = novaNota;
        }
    }

    atualizarNota2(novaNota: number): void {
        if (novaNota >= 0 && novaNota <= 10) {
            this.nota2 = novaNota;
        }
    }
}

function Aluno() {
    const [mensagem, setMensagem] = useState("");
    const aluno = new AlunoClasse("Ramon", 8, 6);

    const checarNota = () => {
        aluno.atualizarNota1(9);
        aluno.atualizarNota2(7);
        const resultado = aluno.exibirResultado();
        setMensagem(`Aluno: ${aluno.nome} | ${resultado}`);
    };

    return (
        <>
            <button onClick={checarNota}>Checar Nota do {aluno.nome}</button>
            <p>{mensagem}</p>
        </>
    );
}

export default Aluno