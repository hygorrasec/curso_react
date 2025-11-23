export default function Botao() {
    function mostrarAlgo() {
        alert("Botão clicado!");
    }

    return <button onClick={mostrarAlgo}>Clique</button>;
}

