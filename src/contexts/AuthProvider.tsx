import React, { useState, useEffect } from "react";

// Definindo o tipo de contexto
interface AuthContextType {
    AccessToken: boolean;
    HandleLogin: (user: string, password: string) => void;
}

// Criando o contexto com um valor padrão
export const AuthContext = React.createContext<AuthContextType>(
    {} as AuthContextType
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const PanelAcess = {
        name: "Walison Lima",
        password: "Rb547f",
    }

    // Validando token no localStorage
    const getStoredToken = () => {
        const storedData = localStorage.getItem("auth_token");
        if (storedData) {
            const { token, expiry } = JSON.parse(storedData);
            if (new Date().getTime() < expiry) {
                return token;
            } else {
                localStorage.removeItem("auth_token");
            }
        }
        return false;
    };

    const [AccessToken, setAccessToken] = useState(getStoredToken());

    const HandleLogin = (LoginUser: string, LoginPassword: string) => {
        if(LoginUser === PanelAcess.name && LoginPassword === PanelAcess.password) {
            console.log(AccessToken)
            console.log(`Acesso concedido a ${LoginUser}`)
            setAccessToken(true);
            console.log(AccessToken)            
        } else {
            console.log('Acesso Negado!')
        }
    }

    // Varifica o tempo do token
    useEffect(() => {
        const checkTokenValidity = () => {
            const storedData = localStorage.getItem("auth_token");
            if (storedData) {
                const { expiry } = JSON.parse(storedData);
                if (new Date().getTime() >= expiry) {
                    localStorage.removeItem("auth_token");
                    setAccessToken(false);
                }
            }
        };

        const interval = setInterval(checkTokenValidity, 10000); // Verifica a cada 10 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <AuthContext.Provider value={{ AccessToken, HandleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};
