export default function InputNome({ onNomeChange }) {
    return (
        <input
            type="text"
            onChange={(e) => onNomeChange(e.target.value)}
            placeholder="Digite seu nome"
        />
    );
}

