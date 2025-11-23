import styles from "./Botao.module.css";

type Props = {
    texto: string;
};

export default function Botao({ texto }: Props) {
    return (
        <button className={styles.btn}>
            {texto}
        </button>
    );
}

