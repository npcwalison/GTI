import React, { useContext, useState, ChangeEvent } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const AuthForAccess: React.FC = () => {
    const { HandleLogin } = useContext(AuthContext);

    const [LoginUser, setLoginUser] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");

    const handleContextMenu = (e: any) => {
        e.preventDefault(); // Impede o menu de contexto (clique direito)
    };

    const handleChangeUser = (event: ChangeEvent<HTMLInputElement>) => {
        if (event && event.target) {
            // Verifica se o evento e o target existem
            setLoginUser(event.target.value);
        }
    };

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        if (event && event.target) {
            // Verifica se o evento e o target existem
            setLoginPassword(event.target.value)
        }
    };

    const CollectingFormData = () => HandleLogin(LoginUser, LoginPassword)

    return (
        <Container>
            <img
                src={Logo}
                alt="GTI Logo"
                draggable="false"
                onContextMenu={handleContextMenu}
                width="160px"
                height="160px"
                title="Desenvolvido por Walison Lima em 2025"
            />
            <form action="" method="post">
                <div className="input-container">
                    <label htmlFor="input-user">Usuario:</label>
                    <input
                        id="input-user"
                        type="text"
                        placeholder="Usuario"
                        value={LoginUser}
                        onChange={handleChangeUser}
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="input-passwd">Senha:</label>
                    <input
                        id="input-passwd"
                        type="password"
                        placeholder="Senha"
                        value={LoginPassword}
                        onChange={handleChangePassword}
                    />
                </div>

                <div className="links">
                    <a href="">Estou sem acesso!</a>
                    <BsFillQuestionCircleFill
                        id="question-icon"
                        title="Desenvolvido por Walison Lima em 2025"
                    />
                </div>

                <button
                    type="button"
                    onClick={CollectingFormData}
                >
                    Acessar
                </button>
            </form>
        </Container>
    );
};

const Container = styled.div`
    width: 320px;
    height: 370px;
    position: absolute;
    left: calc(50% - 160px);
    top: calc(50% - 185px);

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;

    img {
        margin: 0 auto;
    }

    form {
        width: 100%;

        .links {
            display: flex;
            justify-content: space-between;
            padding: 0 12px;
            margin-top: 14px;

            a {
                text-decoration: none;
                font-weight: 600;
                color: var(--gray-color-800);
                font-size: 12px;
                &:hover {
                    text-decoration: underline;
                }
            }

            #question-icon {
                color: var(--gray-color-800);
                cursor: pointer;
            }
        }

        .input-container {
            width: 100%;
            margin-top: 14px;

            label {
                font-size: 12px;
                font-weight: 600;
                color: var(--gray-color-800);
            }

            input {
                width: 100%;
                height: 40px;
                padding: 0 14px;

                &:focus {
                    outline: 1px solid var(--gray-color-400);
                }
            }
        }

        button {
            width: 100%;
            height: 40px;
            border: none;
            color: var(--white-color);
            font-weight: 600;
            background-color: var(--gray-color-400);
            transition: background 0.4s ease-in-out;
            cursor: pointer;
            margin-top: 24px;

            &:hover {
                background-color: var(--gray-color-800);
            }
        }
    }
`;

export default AuthForAccess;
