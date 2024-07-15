import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<{isDarkTheme: boolean }>` 
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;    
    background: ${(props) => (props.isDarkTheme ? "#141D2F" : "#F6F8FF;")};
}
`;

export default GlobalStyles;