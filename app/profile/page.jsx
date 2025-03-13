import styles from "../../styles/Profile.module.css";

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileCard}>
                <img
                    src="/eu.jfif" 
                    alt="Foto de Perfil"
                    className={styles.profilePic}
                />
                <div className={styles.infoCards}>
                    <div className={styles.card}>Nome: Flavia Mendes</div>
                    <div className={styles.card}>Aniversário: 17/03/2008</div>
                    <div className={styles.card}>Técnico em desenvolvimento de sistemas 1</div>
                </div>
            </div>
        </div>
    );
}
