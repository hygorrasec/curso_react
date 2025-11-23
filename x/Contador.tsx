import { useState } from "react";

export default function Contador() {
    const [contador, setContador] = useState(0);
    const aumentar = () => setContador(contador + 1);
    return (
        <>
            <h2>Contador: {contador}</h2>
            <button onClick={aumentar}>+</button>
        </>
    )
}


