import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";



export const LogOut = () => {
    const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear()
    navigate("/");
  }, []);



  return <div></div>;
};
