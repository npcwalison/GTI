import React from "react";
import styled from "styled-components";


export const OverlayCreate:React.FC = () => {
    const dataForm = true;

    return (
        <OverlayCreateStyle>
            <header>
                <h1>CADASTRO DE CLIENTES</h1>
            </header>

            <div className="form">
                <div className="input-container">
                    <label htmlFor="">Assunto</label>
                    <input type="text" placeholder="sobre o que se trata o assunto?"/>
                </div>
            </div>

            <div className="buttons">

                {
                    dataForm ? <button style={{ backgroundColor: 'var(--red-color)'}}>EXCLUIR</button> : <></>
                }
                <button style={{ backgroundColor: 'var(--gray-color-400)'}}>CACELAR</button>
                <button style={{ backgroundColor: 'var(--gray-color-400)'}}>SALVAR</button>
            </div>
        </OverlayCreateStyle>
    );
};


const OverlayCreateStyle = styled.div`
    background: var(--white-color);
    width: 100%;
    height: calc(100% - 114px);
    padding: 0 40px;

    header {
        width: 100%;
        height: 74px;
        border-bottom: solid 2px var(--gray-color-400);
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        padding: 8px 0;

        h1 { 
            font-size: 24px;
            color: var(--gray-color-400);
        }
    }

    div.form {
        width: 100%;
        height: calc( 100% - 192px);
        margin: 14px 0;
    }

    div.buttons {
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;

        button {
            border: none;
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

    .input-container {
        label {
            font-size: 10px;
            text-transform: uppercase;
            color: var(--gray-color-800);
            font-weight: 600;
        }
        input {
            width: 100%;
            font-size: 12px;
            padding: 6px 14px;
            outline: none;
        }
    }
`;