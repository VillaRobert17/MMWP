import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = (props: any) => {



  return localStorage.getItem("uid") ? props.children : <Navigate to="/" />;
};
