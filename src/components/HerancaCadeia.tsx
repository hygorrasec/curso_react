import { useState } from "react";

// Classe base
class Ser {
    constructor(public nome: string) { }

    apresentar() {
        return `Olá, eu sou ${this.nome}`;
    }
}

// Herda de Ser
class Humano extends Ser {
    constructor(nome: string, public idade: number) {
        super(nome);
    }

    apresentar() {
        return `${super.apresentar()} e tenho ${this.idade} anos.`;
    }
}

// Herda de Humano
class Programador extends Humano {
    constructor(nome: string, idade: number, public linguagem: string) {
        super(nome, idade);
    }

    apresentar() {
        return `${super.apresentar()} Trabalho com ${this.linguagem}.`;
    }
}

function HerancaCadeia() {
    const [mensagem, setMensagem] = useState("");

    const testar = () => {
        const dev = new Programador("Hygor", 37, "Python");
        setMensagem(dev.apresentar());
    };

    return (
        <>
            <button onClick={testar}>Testar Herança em Cadeia</button>
            <p>{mensagem}</p>
        </>
    );
}

export default HerancaCadeia