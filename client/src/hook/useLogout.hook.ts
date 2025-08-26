import { useNavigate } from "react-router-dom";
import fetchAPI from "../utils/fetchAPI.utils";

function useLogout() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("jwtTokenClientLAPM");
        fetchAPI("POST", "/api/logout");
        navigate("/login");
    };

    return (
        logout
    );
}

export default useLogout;
