import { useContext } from "react";
import Container from "./styles";
import { ModalContext } from "../../contexts/ModalProvider";

const NavMenu = () => {
    const {
        setVisibleModalSectors,
        setVisibleModalUsers,
        setVisibleModalMachines,
        setVisibleModalEvents,
    } = useContext(ModalContext);

    return (
        <Container>
            <div className="center">
                <h1>GTI</h1>

                <ul>
                    <li>
                        <button onClick={() => setVisibleModalSectors(true)}>
                            Setores
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setVisibleModalUsers(true)}>
                            Usuários
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setVisibleModalMachines(true)}>
                            Maquinas
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setVisibleModalEvents(true)}>
                            Eventos
                        </button>
                    </li>
                </ul>

                <div id="hidden"></div>
            </div>
        </Container>
    );
};

export default NavMenu;
