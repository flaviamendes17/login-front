import styles from "../styles/Home.module.css";
import Input from "../components/Input";
import Botao from "../components/Botao";
import { useRouter } from 'next/router';

export default function SignUp() {
    const router = useRouter();

    const handleSignUpSubmit = () => {
        router.push('/profile'); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <h1>Cadastro</h1>
                <Input label="Email" type="email" />
                <Input label="Nome" type="text" />
                <Input label="Senha" type="password" />
                <Botao onClick={handleSignUpSubmit}>Cadastrar</Botao>
            </div>
        </div>
    );
}