import css from "./ButtonRetour.module.css";
import { useNavigate } from "react-router-dom";

function ButtonRetour() {
    const navigate = useNavigate();

    return (
        <button
            className={css.returnButton}
            onClick={() => navigate(-1)} // ⬅️ -1 = revenir à la page précédente
            aria-label="Retour"
        >
            ← Retour
        </button>
    )
}

export { ButtonRetour };
