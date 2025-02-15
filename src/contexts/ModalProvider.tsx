import React, { useState } from "react";


// Definindo o tipo de contexto
interface ModalContextType  {
    UserOverlay: boolean;
    setUserOverlay: (value: boolean) => void;
    VisibleModalSectors: boolean;
    setVisibleModalSectors: (value: boolean) => void;
    VisibleModalUsers: boolean;
    setVisibleModalUsers: (value: boolean) => void;
    VisibleModalMachines: boolean;
    setVisibleModalMachines: (value: boolean) => void;
    VisibleModalEvents: boolean;
    setVisibleModalEvents: (value: boolean) => void;
}

// Criando o contexto com um valor padrão
export const ModalContext = React.createContext<ModalContextType>({} as ModalContextType);


// Adicionando valores para o contexto
export const ModalProvider = ({children}: { children: React.ReactNode }) => {
    const [UserOverlay, setUserOverlay] = useState(true);
    //HandleModal
    //const [VisibleModal, setVisibleModal] = useState(false);
    const [VisibleModalSectors, setVisibleModalSectors] = useState(false);
    const [VisibleModalUsers, setVisibleModalUsers] = useState(false);
    const [VisibleModalMachines, setVisibleModalMachines] = useState(false);
    const [VisibleModalEvents, setVisibleModalEvents] = useState(false);

    return (
        <ModalContext.Provider value={{
            UserOverlay, //Value
            VisibleModalSectors, //Value
            VisibleModalUsers, //Value
            VisibleModalMachines, //Value
            VisibleModalEvents, //Value
            setUserOverlay, //Setar
            setVisibleModalSectors, //Setar
            setVisibleModalUsers, //Setar
            setVisibleModalMachines, //Setar
            setVisibleModalEvents, //Setar
            }}>
            {children}
        </ModalContext.Provider>
    )
}