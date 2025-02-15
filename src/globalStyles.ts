import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');


  :root {
    color: var(--gray-color-400);
    font-style: normal;
    line-height: 1.5;
    font-weight: 400;
    
    --white-color: #FFFFFF;
    --gray-color-100: #EEEEEE;
    --gray-color-400: #757575;
    --gray-color-800: #222222;
    --red-color: #FF6058;
    
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    background: var(--white-color);
  }

  ::-webkit-scrollbar {
    width: 6px; /* Largura da barra de rolagem */
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* Cor de fundo da área de rolagem */
  }

  ::-webkit-scrollbar-thumb {
    background: #888; /* Cor do "polegar" da barra de rolagem */
    border-radius: 3px; /* Raio dos cantos do "polegar" */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* Cor do "polegar" ao passar o mouse */
  }
`;

export default GlobalStyles;
