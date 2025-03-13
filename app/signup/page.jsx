"use client";

import styles from "../../styles/Home.module.css";
import { useRouter } from 'next/navigation';

export default function SignUp() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/galinhamoana.jfif" alt="Imagem" />
            </div>
            <div className={styles.login}>
                <h1 className={styles.title}>SIGN UP</h1>
                <input className={styles.inputField} type="text" placeholder="Nome" />
                <input className={styles.inputField} type="email" placeholder="Email" />
                <input className={styles.inputField} type="password" placeholder="Senha" />
                <input className={styles.inputField} type="password" placeholder="Confirme a senha" />
                <input className={styles.inputField} type="date" placeholder="Data de Nascimento" />
                <input className={styles.inputField} type="text" placeholder="Curso" />
                <button className={styles.signUpButton} onClick={() => router.push('/profile')}>Cadastrar</button>
            </div>
        </div>
    );
}