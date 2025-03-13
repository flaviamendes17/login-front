import styles from "../styles/Botao.module.css";

export default function Botao({ children, onClick }) {
    return (
        <button className={styles.botao} onClick={onClick}>
            {children}
        </button>
    );
}
