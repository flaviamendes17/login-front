export default function Botao({ children, onClick }) {
    return (
        <button className="botao" onClick={onClick}>
            {children}
        </button>
    );
}
