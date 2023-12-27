import{ createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --base-color: #1B262C;
    --accent-color: #0F4C75;
    --highlight-color: #3282B8;
    --background-color: #BBE1FA; 
    --white: #FFF;
    --light-gray: #F2F2F2;

    --primary-font: 'Inter', sans-serif;
    --secundary-font: 'Poppins', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;