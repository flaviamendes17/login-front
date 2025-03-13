"use client";

import styles from "../styles/Home.module.css";
import Input from "../components/Input";
import Botao from "../components/Botao";
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/profile'); 
    };

    const handleSignUp = () => {
        router.push('/signup'); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/bichomoana.jfif" alt="Bicho Moana" />
            </div>
            
                <div className={styles.login}>
                    <h1 className={styles.title}>Login</h1>
                    <Input label="Email" type="email" id="email" />
                    <Input label="Senha" type="password" id="senha" />
                    <Botao onClick={handleLogin}>Entrar</Botao>
                    <button className={styles.signUpButton} onClick={handleSignUp}>
                        Sign Up
                    </button>
                </div>
        </div>
    );
}
