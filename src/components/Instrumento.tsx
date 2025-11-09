import { useState } from "react";

class Instrumento {
    constructor(public nome: string) { }

    tocar() {
        return `${this.nome} faz um som genérico.`;
    }
}

class Violao extends Instrumento {
    tocar() {
        return `${this.nome} toca: Som de violão!`;
    }
}

class Piano extends Instrumento {
    tocar() {
        return `${this.nome} toca: Som de piano!`;
    }
}

class Bateria extends Instrumento {
    tocar() {
        return `${this.nome} toca: Som de bateria!`;
    }
}

export default function Instrumentos() {
    const [mensagem, setMensagem] = useState<string>("");

    const tocarInstrumentos = () => {
        const instrumentos: Instrumento[] = [
            new Violao("Violão"),
            new Piano("Piano"),
            new Bateria("Bateria"),
            new Instrumento("Instrumento misterioso")
        ];

        let texto = "";

        // Percorre todos os instrumentos e junta os sons em uma única string
        for (let i = 0; i < instrumentos.length; i++) {
            texto += instrumentos[i].tocar() + "\n";
        }

        setMensagem(texto);
    };

    return (
        <>
            <button onClick={tocarInstrumentos}>Tocar Instrumentos</button>
            <pre>{mensagem}</pre>
        </>
    );
}
