import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../StyleRootComponent.module.css";
import css from "./EditUserRoot.module.css";
import useLockedPage from "../../../../hook/useLockedPage.security.hook";
import DataUserType from "../../../../types/dataUser.type";

type EditForm = {
    firstname: string;
    lastname: string;
    address: string;
    email: string;
};

function EditUserRoot() {
    const navigate = useNavigate();
    const userInfo: DataUserType | null = useLockedPage("user");

    const [form, setForm] = useState<EditForm>({
        firstname: "",
        lastname: "",
        address: "",
        email: "",
    });

    // Remplissage initial (utile si userInfo arrive async)
    useEffect(() => {
        if (userInfo) {
            setForm({
                firstname: userInfo.firstname || "",
                lastname: userInfo.lastname || "",
                address: userInfo.address || "",
                email: userInfo.email || "",
            });
        }
    }, [userInfo]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // simple comparaison pour activer/désactiver "Enregistrer"
    const isDirty =
        !!userInfo &&
        (form.firstname !== (userInfo.firstname || "") ||
            form.lastname !== (userInfo.lastname || "") ||
            form.address !== (userInfo.address || "") ||
            form.email !== (userInfo.email || ""));

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: appeler ton endpoint PUT /users/me (ou équivalent)
        // avec "form". Gestion des toasts/erreurs à ajouter ici.
        console.info("[EditUserRoot] submit payload:", form);
    };

    return (
        <div className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>Modifier mes informations</h1>
            </header>

            <form className={style.ContainerRoot} onSubmit={handleSubmit}>
                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="firstname">Prénom</label>
                    <input
                        id="firstname"
                        name="firstname"
                        type="text"
                        value={form.firstname}
                        onChange={handleChange}
                        className={css.Input}
                        autoComplete="given-name"
                        required
                    />
                </div>

                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="lastname">Nom</label>
                    <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        value={form.lastname}
                        onChange={handleChange}
                        className={css.Input}
                        autoComplete="family-name"
                        required
                    />
                </div>

                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="address">Adresse</label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        value={form.address}
                        onChange={handleChange}
                        className={css.Input}
                        autoComplete="street-address"
                    />
                </div>

                <div className={css.FormGroup}>
                    <label className={css.Label} htmlFor="email">Adresse e-mail</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={css.Input}
                        autoComplete="email"
                        required
                    />
                </div>

                <div className={css.ButtonRow}>
                    <button
                        type="button"
                        className={css.CancelButton}
                        onClick={() => navigate("/mon-compte")}
                    >
                        Annuler
                    </button>
                    <button
                        type="submit"
                        className={css.SaveButton}
                        disabled={!isDirty}
                        title={isDirty ? "Enregistrer les modifications" : "Aucune modification"}
                    >
                        Enregistrer
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditUserRoot;
