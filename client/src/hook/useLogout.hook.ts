import { useNavigate } from "react-router-dom";
import fetchAPI from "../utils/fetchAPI.utils";

function useLogout() {
    const navigate = useNavigate();

    const logout = async () => {
        localStorage.removeItem("jwtTokenClientLAPM");
        await fetchAPI("POST", "/logout");
        navigate("/login");
    };

    return (
        logout
    );
}

export default useLogout;
