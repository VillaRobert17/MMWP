
import { Navigate } from "react-router-dom";

export const PublicRoute = (props: any) => {
  //if user is logged in, redirect to home
  return localStorage.getItem("uid") ? <Navigate to="/Home" /> : props.children;
};
