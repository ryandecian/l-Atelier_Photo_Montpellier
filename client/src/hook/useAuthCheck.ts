import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import DataUserType from "../types/dataUserType";

const useAuthCheck = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // False = non connecté
  const [userInfo, setUserInfo] = useState<DataUserType | null>(null); // DataUser
  const [isChecking, setIsChecking] = useState<boolean>(true); // True = en cours de vérification
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtTokenClientLAPM");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const payload: DataUserType = jwtDecode<DataUserType>(token); 

      const now: number = Math.floor(Date.now() / 1000);
      if (payload.exp && payload.exp < now) {
        localStorage.removeItem("jwtTokenClientLAPM");
        navigate("/login");
        return;
      }

      setUserInfo(payload);
      setIsLoggedIn(true);
    } 
    catch {
      localStorage.removeItem("jwtTokenClientLAPM");
      navigate("/login");
    } 
    finally {
      setIsChecking(false);
    }
  }, [navigate]);

  return { isLoggedIn, userInfo, isChecking };
};

export default useAuthCheck;

/*
Utilisation :

import useAuthCheck from "../hooks/useAuthCheck";
const { isLoggedIn, userInfo, isChecking  } = useAuthCheck();

if (!isLoggedIn || !userInfo) {
    return <p>Chargement ou redirection...</p>;
  }

*/
