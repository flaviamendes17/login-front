import "./profile.css";

export default function Profile() {
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
                </div>
            </div>
        </div>
    );
}
