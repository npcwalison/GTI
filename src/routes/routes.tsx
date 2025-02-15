import React, { useContext } from "react";
import { Routes, Route } from "react-router";
import { AuthContext } from "../contexts/AuthProvider";

//Pages to routes
import App from "../App";
import AuthForAccess from "./Auth";


const Router:React.FC = () => {
    const { AccessToken  } = useContext(AuthContext);


    return (
        <Routes>
            <Route
                path="/"
                element={AccessToken ? <App /> : <AuthForAccess />}
            />
        </Routes>
    )
}

export default Router;