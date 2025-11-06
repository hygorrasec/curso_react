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

function Sobrescrita() {
    const [mensagemAnimal, setMensagemAnimal] = useState("");
    const [mensagemDog, setMensagemDog] = useState("");
    const [mensagemCat, setMensagemCat] = useState("");

    const testarSons = () => {
        const animal = new Animal("Animal");
        const dog = new Cachorro("Cachorrinho");
        const cat = new Gato("Gatinho");
        setMensagemAnimal(animal.emitirSom());
        setMensagemDog(dog.emitirSom());
        setMensagemCat(cat.emitirSom());
    };

    return (
        <>
            <p>Cada classe herda o mesmo método, mas com um comportamento diferente.</p>
            <button onClick={testarSons}>Testar Sons</button>
            <p>{mensagemAnimal}</p>
            <p>{mensagemDog}</p>
            <p>{mensagemCat}</p>
        </>
    );
}

export default Sobrescrita