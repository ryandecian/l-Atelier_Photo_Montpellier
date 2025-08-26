import { useNavigate } from "react-router-dom";
import fetchAPI from "../utils/fetchAPI.utils";

function useLogout() {
    const navigate = useNavigate();
    const res = fetchAPI("POST", "/api/logout");

    const logout = () => {
        localStorage.removeItem("jwtTokenClientLAPM");
        navigate("/login");
    };

    return (
        logout
    );
}

export default useLogout;
