"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importa o hook useRouter
import styles from "../../styles/Home.module.css";

export default function SignUp() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [match, setMatch] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter(); 

    const handleCheck = () => {
        if (input1.length === 0) {
            setMatch(false);
            setError("Coloque uma senha");
            return; 
        } else if (input2.length === 0) {
            setMatch(false);
            setError("Confirme a senha");
            return; 
        } else if (input1.length < 6) {
            setMatch(false);
            setError("A senha deve ter pelo menos 6 caracteres");
            return; 
        } else if (input1 !== input2) {
            setMatch(false);
            setError("As senhas não são iguais");
            return; 
        }

        setMatch(true);
        setError("Senha cadastrada com sucesso!");
        router.push("/profile"); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/galinhamoana.jfif" alt="Imagem" />
            </div>
            <div className={styles.login}>
                <h1 className={styles.title}>SIGN UP</h1>
                <input className={styles.inputField} type="text" placeholder="Nome" />
                <input className={styles.inputField} type="email" placeholder="Email" />
                <input className={styles.inputField} type="password" placeholder="Senha" value={input1} onChange={(e) => setInput1(e.target.value)} />
                <input className={styles.inputField} type="password" placeholder="Confirme a senha" value={input2} onChange={(e) => setInput2(e.target.value)} />
                <input className={styles.inputField} type="date" placeholder="Data de Nascimento" />
                <input className={styles.inputField} type="text" placeholder="Curso" />
                
                <button className={styles.signUpButton} onClick={handleCheck}>Cadastrar</button>
                {match !== null && <p>{error}</p>}
            </div>
        </div>
    );
}