import { useState } from "react";

export default function Somador() {
    const [n1, setN1] = useState<number>(0);
    const [n2, setN2] = useState<number>(0);
    const [resultado, setResultado] = useState<number | null>(null);

    const somar = () => {
        setResultado(n1 + n2);
    };

    return (
        <div>
            <h2>Somador</h2>
            <input
                type="number"
                placeholder="Número 1"
                onChange={(e) => setN1(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Número 2"
                onChange={(e) => setN2(Number(e.target.value))}
            />
            <button onClick={somar}>Somar</button>

            {resultado !== null && <p>Resultado: {resultado}</p>}
        </div>
    );
}
