import { useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("jwtTokenClientLAPM");
    navigate("/login");
  };

  return logout;
}

export default useLogout;
