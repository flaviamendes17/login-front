import styles from "../styles/Input.module.css";

export default function Input({ label, type }) {
    return <input className={styles.input} placeholder={label} type={type} />;
}

