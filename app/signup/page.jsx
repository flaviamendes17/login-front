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
                <h1 className={styles.title}>Sign Up</h1>
                <input className={styles.inputField} type="text" placeholder="Nome" />
                <input className={styles.inputField} type="email" placeholder="Email" />
                <input className={styles.inputField} type="password" placeholder="Senha" />
                <button className={styles.signUpButton} onClick={() => router.push('/profile')}>Cadastrar</button>
            </div>
        </div>
    );
}