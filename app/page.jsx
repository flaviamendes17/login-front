import styles from "../styles/Home.module.css";
import Input from "../components/Input";
import Botao from "../components/Botao";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <h1>Login</h1>
                <Input label="Email" type="email" />
                <Input label="Senha" type="password" />
                <Botao/>
            </div>
        </div>
    );
}