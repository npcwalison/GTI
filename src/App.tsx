import React from "react";
import styled from "styled-components";
import bgLogo from "./assets/logo.png";
import NavMenu from "./components/NavMenu";

import Sectors from "./views/sectors";
import Users from "./views/users";
import Machines from "./views/machines";
import Events from "./views/events";


const App: React.FC = () => {

    return (
        <Container>
            <NavMenu />
            <Sectors />
            <Users />
            <Machines />
            <Events />
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgLogo}) no-repeat, var(--gray-color-100);
    background-position: center;
`;

export default App;
