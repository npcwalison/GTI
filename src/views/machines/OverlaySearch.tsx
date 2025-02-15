import React, { useContext } from "react";
import styled from "styled-components";
import { ApiContext } from "../../contexts/ApiProvider";
import { MachinesTypes } from "../../contexts/ApiProvider";

export const OverlaySearch: React.FC = () => {
    const { machines } = useContext(ApiContext);

    return (
        <OverlaySearchStyle>
            <header>
                <h3>Parâmetros de busca</h3>
                <div className="form">
                    <div className="input-container">
                        <label htmlFor="">Titulo do documento</label>
                        <input
                            type="text"
                            placeholder="O que você quer encontrar?"
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="">Data</label>
                        <input type="date" />
                    </div>
                    <button
                        style={{ backgroundColor: "var(--gray-color-400)" }}
                    >
                        PESQUISAR
                    </button>
                </div>
            </header>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>setor</th>
                            <th>nome</th>
                            <th>so</th>
                            <th>usuarios</th>
                            <th>processador</th>
                            <th>ram</th>
                            <th>motheboard</th>
                            <th>armazenamento</th>
                            <th>video</th>
                            <th>monitores</th>
                            <th>n_maquina</th>
                            <th>n_monitores</th>
                            <th>n_nobreak</th>
                        </tr>
                    </thead>
                    <tbody>
                        {machines.map((machines: MachinesTypes) => (
                            <tr>
                                <td>{machines.primary_key}</td>
                                <td>{machines.setor}</td>
                                <td>{machines.nome}</td>
                                <td>{machines.so}</td>
                                <td>{machines.usuarios}</td>
                                <td>{machines.processador}</td>
                                <td>{machines.ram}</td>
                                <td>{machines.motheboard}</td>
                                <td>{machines.armazenamento}</td>
                                <td>{machines.video}</td>
                                <td>{machines.monitores}</td>
                                <td>{machines.n_maquina}</td>
                                <td>{machines.n_monitores}</td>
                                <td>{machines.n_nobreak}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </OverlaySearchStyle>
    );
};

const OverlaySearchStyle = styled.div`
    background: var(--white-color);
    width: 100%;
    height: calc(100% - 114px);
    padding: 14px 40px;

    header {
        width: 100%;
        height: 110px;
        background: var(--gray-color-100);
        padding: 8px;
        margin-bottom: 12px;

        h3 {
            font-size: 16px;
            text-align: center;
        }
        .form {
            width: 100%;
            height: 70px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;

            .input-container {
                margin-right: 6px;

                label {
                    font-size: 10px;
                    text-transform: uppercase;
                    color: var(--gray-color-800);
                    font-weight: 600;
                }
                input {
                    width: 100%;
                    height: 31px;
                    font-size: 12px;
                    padding: 6px 14px;
                    outline: none;
                }
            }

            button {
                border: none;
                height: 31px;
                font-size: 12px;
                font-weight: 600;
                color: var(--white-color);
                padding: 8px 24px;
                margin: 0 4px;
                cursor: pointer;
                transition: opacity 0.4s;
                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }

    .table-container {
        width: 920px;
        max-height: 336px;
        overflow: scroll;

        table {
            width: 100%;
            background-color: #ff0;
            border-collapse: collapse;

            tr {
                height: 28px;
                &:nth-child(odd) {
                    background-color: #ffffff; /* Linhas ímpares */
                }

                &:nth-child(even) {
                    background-color: #eeeeee; /* Linhas pares */
                }
            }
            th,
            td {
                padding: 0 12px;
                font-size: 12px;
                white-space: nowrap;
                &:first-child {
                    width: 50px;
                    text-align: center;
                }
            }

            thead {
                width: 100%;
                th {
                    text-align: left;
                    background: var(--gray-color-400);
                    color: var(--white-color);
                }
            }

            tbody {
                // max-height: 336px;
                // overflow-y: scroll;
                width: 100%;
                td {
                    text-align: left;
                    &:first-child {
                        border-right: 1px solid var(--gray-color-400); /* Cor e espessura da borda */
                    }
                }
            }
        }
    }
`;
