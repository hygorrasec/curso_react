import { useState } from "react";

class Animal {
    constructor(public nome: string) { }

    emitirSom() {
        return `${this.nome} faz um som genérico...`;
    }
}

class Cachorro extends Animal {
    emitirSom() {
        return `${this.nome} diz: Au au!`;
    }
}

class Gato extends Animal {
    emitirSom() {
        return `${this.nome} diz: Miau!`;
    }
}

function Polimorfismo() {
    const [mensagem, setMensagem] = useState<string>("");

    const mostrarSons = () => {
        const animais: Animal[] = [
            new Cachorro("Cachorro"),
            new Gato("Gato"),
            new Animal("Criatura misteriosa")
        ];

        let texto = "";
        for (let i = 0; i < animais.length; i++) {
            texto += animais[i].emitirSom() + "\n";
        }

        setMensagem(texto);
    };

    return (
        <>
            <button onClick={mostrarSons}>Mostrar Sons</button>
            <pre>{mensagem}</pre>  {/* o <pre> mantém tudo igual ao formato original da string */}
        </>
    );
}

export default Polimorfismo
