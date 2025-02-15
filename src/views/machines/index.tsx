import React, { useContext } from "react";
import { ModalMachines, Menu } from "./styles.ts";
import IconMinimize from "../../assets/minimize.svg";
import IconClosed from "../../assets/closed.svg";
import { ModalContext } from "../../contexts/ModalProvider.tsx";

import { OverlayCreate } from "./OverlayCreate.tsx";
import { OverlaySearch } from "./OverlaySearch.tsx";

const Machines: React.FC = () => {
    const { UserOverlay, setUserOverlay, VisibleModalMachines, setVisibleModalMachines } = useContext(ModalContext);

    if (VisibleModalMachines) {
        return (
            <ModalMachines>
                <div className="title">
                    <p>Painel de Maquinas</p>

                    <div className="buttons">
                        <button title="Esconder">
                            <img src={IconMinimize} alt="_" />
                        </button>
                        <button title="Fechar" onClick={() => setVisibleModalMachines(false)}>
                            <img src={IconClosed} alt="x" />
                        </button>
                    </div>
                </div>

                <Menu>
                    <button
                        onClick={() => setUserOverlay(true)}
                        style={{
                            backgroundColor: UserOverlay ? 'var(--white-color)' : 'var(--gray-color-100)',
                            borderWidth: UserOverlay ? 2 : 1,
                            fontWeight: UserOverlay ? '600' : '400'
                        }}
                    >CADASTRO</button>
                    <button
                        onClick={() => setUserOverlay(false)}
                        style={{
                            backgroundColor: UserOverlay ? 'var(--gray-color-100)' : 'var(--white-color)',
                            borderWidth: UserOverlay ? 1 : 2,
                            fontWeight: UserOverlay ? '400' : '600'
                        }}
                    >LOCALIZAR</button>
                </Menu>

                {UserOverlay ? <OverlayCreate /> : <OverlaySearch />}
            </ModalMachines>
        );
    }
};

export default Machines;
