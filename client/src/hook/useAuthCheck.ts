import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import DataUserType from "../types/dataUserType";

/*
Utilisation :

import useAuthCheck from "../hooks/useAuthCheck";
const { isLoggedIn, userInfo } = useAuthCheck();

if (!isLoggedIn || !userInfo) {
    return <p>Chargement ou redirection...</p>;
  }

*/

const useAuthCheck = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<DataUserType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtTokenClientLAPM");

    if (token) {
      const payload = jwtDecode<DataUserType>(token);
      const nowInSeconds = Math.floor(Date.now() / 1000);

      if (payload.exp < nowInSeconds) {
        console.warn("Token expiré. Déconnexion...");

        // Suppression du token
        localStorage.removeItem("jwtTokenClientLAPM");

        // Réinitialisation de l'état
        setIsLoggedIn(false);
        setUserInfo(null);

        // Redirection
        navigate("/login");
        return;
      }

      setIsLoggedIn(true);
      setUserInfo(payload);
    } else {
      setIsLoggedIn(false);
      setUserInfo(null);
    }
  }, [navigate]); // ⬅️ on ajoute `navigate` dans les dépendances pour éviter les warnings

  return { isLoggedIn, userInfo };
};

export default useAuthCheck;
