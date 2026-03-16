/* Import des composants React */
import { useNavigate } from "react-router-dom";

/* Import des Utils */
import { fetchAPI_Utils } from "../utils/fetchAPI.utils";

function useLogout_Hook() {
    const navigate = useNavigate();

    const logout = async () => {
        localStorage.removeItem("jwtTokenClientLAPM");
        await fetchAPI_Utils("POST", "/logout");
        navigate("/login");
    };

    return (
        logout
    );
}

export { useLogout_Hook };
