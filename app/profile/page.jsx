"use client";

import { useRouter } from "next/navigation";
import "./profile.css";

export default function Profile() {
    const router = useRouter(); 

    return (
        <div className="profileContainer">
            <div className="profileCard">
                <img
                    src="/eu.jfif" 
                    alt="Foto de Perfil"
                    className="profilePic"
                />
                <div className="infoCards">
                    <div className="card">Flavia Mendes</div>
                    <div className="card">flavia.r.mendes@aluno.senai.br</div>
                    <div className="card">Aniversário: 17/03/2008</div>
                    <div className="card">Técnico em desenvolvimento de sistemas 1</div>
                    <div className="card">Técnologias estudadas</div>
                </div>
                <div className="competencias">
                    <img src="nodejs.png" alt="nodejs" />
                    <img src="html.png" alt="html" />
                    <img src="css.png" alt="css" />
                    <img src="postgree.png" alt="postgrees" />
                    <img src="postman.png" alt="postman" />
                    <img src="nextjs.png" alt="nextjs" />
                    <img src="js.png" alt="javascript" />
                </div>
                <button 
                    className="backToLoginButton" 
                    onClick={() => router.push('/')}
                >
                    Voltar para Login
                </button>
            </div>
        </div>
    );
}
